/**
 * Hamburger Menu for Mobile
 * Slide-in navigation menu
 */

class HamburgerMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger-btn');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.overlay = document.querySelector('.mobile-menu-overlay');
        this.closeBtn = document.querySelector('.mobile-menu-close');
        this.menuLinks = document.querySelectorAll('.mobile-menu-links a');

        this.init();
    }

    init() {
        if (!this.hamburger || !this.mobileMenu) return;

        // Toggle menu on hamburger click
        this.hamburger.addEventListener('click', () => this.toggleMenu());

        // Close menu on overlay click
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeMenu());
        }

        // Close menu on close button click
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeMenu());
        }

        // Close menu when clicking a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.mobileMenu.classList.contains('active');

        if (isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.mobileMenu.classList.add('active');
        this.overlay.classList.add('active');
        this.hamburger.classList.add('active');
        document.body.classList.add('mobile-menu-open');
    }

    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.overlay.classList.remove('active');
        this.hamburger.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.hamburgerMenu = new HamburgerMenu();
});
