const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');
const nav = document.querySelector('.toggle');

iconeToggle.addEventListener('click', () => {

    menuResponsive.classList.toggle('hidden');
    nav.classList.add('hidden');

})
