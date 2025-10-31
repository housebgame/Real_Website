/**
 * Back to Top Button
 * Smooth scroll to top with show/hide functionality
 */

class BackToTop {
    constructor() {
        this.button = document.querySelector('.back-to-top');
        if (!this.button) {
            this.createButton();
        }

        this.scrollThreshold = 300;
        this.init();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.setAttribute('aria-label', 'Back to top');
        this.button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        document.body.appendChild(this.button);
    }

    init() {
        // Click event
        this.button.addEventListener('click', () => this.scrollToTop());

        // Show/hide on scroll
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

        // Initial check
        this.handleScroll();
    }

    handleScroll() {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > this.scrollThreshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.backToTop = new BackToTop();
});
