/**
 * Featured Carousel Functionality
 * Modern, smooth carousel with auto-play
 */

class FeaturedCarousel {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.carousel = this.container.querySelector('.featured-carousel');
        this.items = this.container.querySelectorAll('.featured-item');
        this.prevBtn = this.container.querySelector('.featured-nav.prev');
        this.nextBtn = this.container.querySelector('.featured-nav.next');
        this.indicators = this.container.querySelectorAll('.featured-indicator');

        this.currentIndex = 0;
        this.isAutoPlaying = true;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (this.items.length === 0) return;

        console.log('✅ Initializing carousel with', this.items.length, 'items');

        // Mark first item as active initially
        if (this.items[0]) {
            this.items[0].classList.add('active');
        }

        // Set up event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.container.addEventListener('mouseleave', () => this.resumeAutoPlay());

        // Touch/Swipe support
        this.setupTouchSupport();

        // Set up video play/pause detection
        this.setupVideoDetection();

        // Start auto-play
        this.startAutoPlay();

        // Show first slide
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    updateCarousel() {
        console.log('🔄 Updating carousel to slide', this.currentIndex);

        // Use class-based approach instead of inline styles
        this.items.forEach((item, index) => {
            if (index === this.currentIndex) {
                item.classList.add('active');
                item.classList.remove('inactive');
            } else {
                item.classList.remove('active');
                item.classList.add('inactive');
            }
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        // Fire custom event for analytics/tracking
        this.container.dispatchEvent(new CustomEvent('slideChange', {
            detail: { index: this.currentIndex }
        }));
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) return;

        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
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

    setupTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.carousel.addEventListener('touchend', (e) => {
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
                this.prev();
            }
        }
    }

    setupVideoDetection() {
        // CLEVER SOLUTION: Use transparent overlay that catches first tap/click
        // When tapped, it pauses carousel and removes itself IMMEDIATELY

        this.items.forEach(item => {
            const overlay = item.querySelector('.video-tap-overlay');
            const iframe = item.querySelector('iframe');

            if (overlay && iframe) {
                // Handle touch for mobile
                overlay.addEventListener('touchstart', (e) => {
                    console.log('🎬 Video overlay tapped - pausing carousel and removing overlay');

                    // Pause the carousel FIRST
                    this.pauseAutoPlay();
                    this.isAutoPlaying = false;

                    // Remove the overlay IMMEDIATELY (before touch completes)
                    overlay.remove();

                    // Get the touch coordinates
                    const touch = e.touches[0];
                    const rect = iframe.getBoundingClientRect();

                    // Create a synthetic click on the iframe at the same location
                    setTimeout(() => {
                        const clickEvent = new MouseEvent('click', {
                            bubbles: true,
                            cancelable: true,
                            clientX: touch.clientX,
                            clientY: touch.clientY
                        });
                        iframe.dispatchEvent(clickEvent);
                        console.log('🎬 Forwarded tap to video iframe');
                    }, 10);
                }, { passive: true });

                // Handle click for desktop
                overlay.addEventListener('click', (e) => {
                    console.log('🎬 Video overlay clicked - pausing carousel and removing overlay');

                    // Pause the carousel
                    this.pauseAutoPlay();
                    this.isAutoPlaying = false;

                    // Remove the overlay
                    overlay.remove();

                    // Forward the click to iframe
                    setTimeout(() => {
                        const clickEvent = new MouseEvent('click', {
                            bubbles: true,
                            cancelable: true,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                        iframe.dispatchEvent(clickEvent);
                        console.log('🎬 Forwarded click to video iframe');
                    }, 10);
                });

                // Desktop hover - just pause, don't remove overlay yet
                overlay.addEventListener('mouseenter', () => {
                    console.log('🎬 Video hovered - pausing carousel');
                    this.pauseAutoPlay();
                    this.isAutoPlaying = false;
                });
            }
        });
    }

    destroy() {
        this.pauseAutoPlay();
        // Clean up event listeners if needed
    }
}

// Don't auto-initialize - will be initialized manually after content is populated
// The main HTML file will create the instance after populating the carousel items
