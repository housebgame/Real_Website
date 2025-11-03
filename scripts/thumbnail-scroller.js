/**
 * Thumbnail Scroller Functionality
 * Auto-rotating image preview with manual controls
 */

class ThumbnailScroller {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.mainImage = this.container.querySelector('.discover-main-image');
        this.thumbnails = this.container.querySelectorAll('.discover-thumbnail');
        this.track = this.container.querySelector('.discover-thumbnail-track');
        this.prevBtn = this.container.querySelector('.discover-scroll-btn.prev');
        this.nextBtn = this.container.querySelector('.discover-scroll-btn.next');
        this.pauseBtn = this.container.querySelector('.discover-pause-play');

        this.currentIndex = 0;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        this.progressInterval = null;

        this.init();
    }

    init() {
        if (this.thumbnails.length === 0) return;

        // Set up thumbnail clicks
        this.thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => this.goToIndex(index));
        });

        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.scrollTrack(-200));
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.scrollTrack(200));
        }

        // Pause/Play button
        if (this.pauseBtn) {
            this.pauseBtn.addEventListener('click', () => this.toggleAutoPlay());
        }

        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.container.addEventListener('mouseleave', () => this.resumeAutoPlay());

        // Touch support for main image
        this.setupTouchSupport();

        // Start auto-play
        this.startAutoPlay();

        // Set initial state
        this.updateDisplay();
    }

    goToIndex(index) {
        this.currentIndex = index;
        this.updateDisplay();
        this.resetAutoPlay();
        this.scrollThumbnailIntoView(index);
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.thumbnails.length;
        this.updateDisplay();
        this.scrollThumbnailIntoView(this.currentIndex);
    }

    updateDisplay() {
        // Update main image
        const activeThumbnail = this.thumbnails[this.currentIndex];
        const newImageSrc = activeThumbnail.querySelector('img').src;

        // Fade effect
        this.mainImage.style.opacity = '0';
        setTimeout(() => {
            this.mainImage.src = newImageSrc;
            this.mainImage.style.opacity = '1';
        }, 200);

        // Update active state
        this.thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentIndex);
        });

        // Update main image container link
        this.updateMainImageLink();

        // Update progress bar on active thumbnail
        this.startProgressAnimation();
    }

    updateMainImageLink() {
        // Get the main image container
        const mainImageContainer = this.mainImage.closest('.discover-main-image-container');
        if (!mainImageContainer) return;

        // Determine category type based on which discover category this belongs to
        const categoryElement = this.container;
        const isGamesCategory = categoryElement.classList.contains('games');
        const isToolsCategory = categoryElement.classList.contains('tools');

        // Get the correct data based on category
        let currentData = null;
        if (isGamesCategory && projectsData.games[this.currentIndex]) {
            currentData = projectsData.games[this.currentIndex];
        } else if (isToolsCategory && projectsData.toolsAndAssets[this.currentIndex]) {
            currentData = projectsData.toolsAndAssets[this.currentIndex];
        }

        if (!currentData) return;

        // Remove old click handler by cloning and replacing the element
        const newContainer = mainImageContainer.cloneNode(true);
        mainImageContainer.parentNode.replaceChild(newContainer, mainImageContainer);

        // Update reference
        this.mainImage = newContainer.querySelector('.discover-main-image');

        // Add new click handler with correct link
        newContainer.addEventListener('click', () => {
            let link = null;
            if (isGamesCategory) {
                link = currentData.links.playPage || currentData.links.crazyGame || currentData.links.playStore;
                if (link) {
                    window.location.href = link;
                }
            } else if (isToolsCategory) {
                link = currentData.links.github || currentData.links.url || currentData.links.download;
                if (link) {
                    window.open(link, '_blank');
                }
            }
        });
    }

    scrollThumbnailIntoView(index) {
        const thumbnail = this.thumbnails[index];
        if (!thumbnail || !this.track) return;

        const trackRect = this.track.getBoundingClientRect();
        const thumbRect = thumbnail.getBoundingClientRect();

        const isVisible = thumbRect.left >= trackRect.left && thumbRect.right <= trackRect.right;

        if (!isVisible) {
            // Scroll the track container only, not the whole page
            const scrollLeft = thumbnail.offsetLeft - (this.track.offsetWidth / 2) + (thumbnail.offsetWidth / 2);
            this.track.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }

    scrollTrack(amount) {
        if (!this.track) return;

        this.track.scrollBy({
            left: amount,
            behavior: 'smooth'
        });
    }

    startProgressAnimation() {
        // Clear any existing progress animation
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }

        const activeThumbnail = this.thumbnails[this.currentIndex];
        if (!activeThumbnail) return;

        let progress = 0;
        const steps = 50; // Number of animation steps
        const stepTime = this.autoPlayDelay / steps;

        this.progressInterval = setInterval(() => {
            progress += (100 / steps);
            if (progress >= 100) {
                progress = 100;
                clearInterval(this.progressInterval);
            }
            activeThumbnail.style.setProperty('--progress', `${progress}%`);
        }, stepTime);
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) return;

        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.autoPlayDelay);

        this.startProgressAnimation();
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
    }

    resumeAutoPlay() {
        if (this.isAutoPlaying) {
            this.startAutoPlay();
        }
    }

    resetAutoPlay() {
        this.pauseAutoPlay();
        this.resumeAutoPlay();
    }

    toggleAutoPlay() {
        this.isAutoPlaying = !this.isAutoPlaying;

        if (this.isAutoPlaying) {
            this.startAutoPlay();
            if (this.pauseBtn) {
                this.pauseBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
            }
        } else {
            this.pauseAutoPlay();
            if (this.pauseBtn) {
                this.pauseBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
            }
        }
    }

    setupTouchSupport() {
        if (!this.mainImage) return;

        let touchStartX = 0;
        let touchEndX = 0;

        const imageContainer = this.mainImage.closest('.discover-main-image-container');
        if (!imageContainer) return;

        imageContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        imageContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                this.next();
            } else {
                // Swipe right - prev
                const prevIndex = (this.currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
                this.goToIndex(prevIndex);
            }
        }
    }

    destroy() {
        this.pauseAutoPlay();
    }
}

// Don't auto-initialize - will be initialized manually after content is populated
// The main HTML file will create the instances after populating the thumbnail items
