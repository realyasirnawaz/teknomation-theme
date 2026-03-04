// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-md');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2', 'shadow-md');
        }
    });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// FAQ accordion
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        if (content) {
            content.classList.toggle('hidden');
            const icon = toggle.querySelector('i');
            if (icon) {
                if (content.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'chevron-down');
                } else {
                    icon.setAttribute('data-lucide', 'chevron-up');
                }
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }
    });
});
