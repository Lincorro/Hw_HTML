const mobileMenu = document.querySelector('mobile-menu');
const burger = document.querySelector('topButton__menu');

function toggleMenu(){
    mobileMenu.classList.toggle('hidden');
}
burger.addEventListener('click', toggleMenu);
