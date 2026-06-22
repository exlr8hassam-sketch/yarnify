// Mobile nav toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        mobileToggle.classList.toggle('is-active');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is tapped
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            mobileToggle.classList.remove('is-active');
            mobileToggle.setAttribute('aria-expanded', false);
        });
    });
}