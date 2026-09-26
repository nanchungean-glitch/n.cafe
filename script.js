const menuButton = document.querySelector('.bar');
const mobileMenu = document.getElementById('header-mobile');

function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
}

menuButton.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-mobile a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
