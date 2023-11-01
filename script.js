
const menu_btn = document.querySelector('.hamburguer');
const navbar_list = document.querySelector('.navbar-list');
    
menu_btn.addEventListener('click', function() {
menu_btn.classList.toggle('is-active');
navbar_list.classList.toggle('is-active');
});



