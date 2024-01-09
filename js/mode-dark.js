let isModeSombre = false;

let moon = document.querySelector('.fa-moon-o');
let sun = document.querySelector('.fa-sun-o');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    isModeSombre = !isModeSombre;
    if (isModeSombre) {
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
    }
}

sun.style.display = "none";
moon.style.display = "block";