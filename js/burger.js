let isMenuBurger = false; 

function toggleMenu() {
    const menu = document.querySelector('.menu');
    isMenuBurger = !isMenuBurger;
    if (isMenuBurger) 
        menu.style.display = 'flex';
    else 
        menu.style.display = "none";
}