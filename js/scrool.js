document.addEventListener('click', function (e) {
    if (e.target.classList.contains('scroll-link')) {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').substring(1); // Obtient l'ID de la cible (section)
        const targetElement = document.getElementById(targetId);

        // Vérifie si la cible existe
        if (targetElement) {
            // Utilisez smooth scroll pour une animation agréable
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});