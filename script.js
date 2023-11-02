const navbar = document.querySelector('.navbar-list');
const nav_toggle = document.querySelector('.navbar-menu__toggle');

// una vez el usuario haga click, se abrirá y se cerrará según la condición que se le da
nav_toggle.addEventListener('click', () => {
    const visibility = navbar.getAttribute('data-visible');
    
// se le asigan ahora el atributo para que se abra, de lo contrario se cerrará
    if(visibility === 'false') {
        navbar.setAttribute('data-visible', 'true');
        nav_toggle.setAttribute('aria-expanded', 'true');
    } else if (visibility === 'true'){
        navbar.setAttribute('data-visible', 'false');
        nav_toggle.setAttribute('aria-expanded', 'false');
    }
});
