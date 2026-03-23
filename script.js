// Initialize Lucide Icons
// This converts the <i data-lucide="..."> elements into SVG icons
lucide.createIcons();

// Navbar Scroll Effect
// Adds a background and blur when scrolling down
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.remove('py-6', 'bg-transparent');
        navbar.classList.add('py-4', 'bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-slate-100');
    } else {
        navbar.classList.add('py-6', 'bg-transparent');
        navbar.classList.remove('py-4', 'bg-white/95', 'backdrop-blur-sm', 'border-b', 'border-slate-100');
    }
});

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const menuIcon = document.getElementById('menu-icon');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        // Optional: Change icon to X if desired, currently stays as menu hamburger
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Scroll To Top Button Logic
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Show button
        scrollToTopBtn.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
        // Hide button
        scrollToTopBtn.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.remove('translate-y-0', 'opacity-100');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});