alert('Hey bienvenue sur mon premier site avec tailwindcss')

const menuResponsive = document.querySelector('.toggle-menu');
const iconeToggle = document.querySelector('.icone-toggle');

iconeToggle.addEventListener('click', () => {

    menuResponsive.classList.toggle('hidden');

})
