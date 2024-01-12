let isModeSombre = null;

if (!JSON.parse(localStorage.getItem("mode-dark"))) {
    localStorage.setItem("mode-dark", JSON.stringify(false));
} 

let localStorageIsModeSombre = localStorage.getItem("mode-dark");

isModeSombre = JSON.parse(localStorageIsModeSombre);

let moon = document.querySelector('.fa-moon-o');
let sun = document.querySelector('.fa-sun-o');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    isModeSombre = !isModeSombre;
    
    if (isModeSombre) {
        sun.style.display = "block";
        moon.style.display = "none";
        localStorage.setItem("mode-dark", true);
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        localStorage.setItem("mode-dark", false);
    }
}

if (isModeSombre) {
    sun.style.display = "block";
    moon.style.display = "none";
    document.body.classList.toggle('dark-mode');
} else {
    sun.style.display = "none";
    moon.style.display = "block";
}