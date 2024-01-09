let currentLanguage = 'en';
// Fonction pour charger les traductions depuis le fichier JSON
async function loadTranslations() {
    try {
        const response = await fetch('./index.json');
        translations = await response.json();
        changeLanguage(); // Appliquer les traductions une fois chargées
    } catch (error) {
        console.error('Error fetching translations:', error);
    }
}

function changeLanguage() {
    // Sélectionne tous les éléments qui nécessitent un changement de langue
    let elementsToTranslate = document.querySelectorAll('.translateable');
  
    // Change le texte pour chaque élément
    elementsToTranslate.forEach(function (element) {
        var key = element.id; // Utilise l'ID de l'élément comme clé de traduction
        
        // Vérifiez si la clé et la langue existent dans les traductions
        if (translations[key] && translations[key][currentLanguage]) {
            element.innerText = translations[key][currentLanguage];
        } else {
            console.error('Translation not found for key: ' + key + ' and language: ' + currentLanguage);
        }
    });
    
    // Change également la langue du document HTML
    let html = document.querySelector('html');
    html.lang = (currentLanguage === 'en') ? 'fr' : 'en';
    
    // Met à jour le titre avec la langue actuelle
    document.title = translations.pageTitle[currentLanguage] + ' (' + html.lang.toUpperCase() + ')';
    
    // Bascule la langue actuelle
    currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';

    if (currentLanguage === 'en') {
        englishFlagMenu.style.display = 'inline-block';
        frenchFlagMenu.style.display = 'none';
    } else {
        englishFlagMenu.style.display = 'none';
        frenchFlagMenu.style.display = 'inline-block';
    }
}

// Attendez que le document soit chargé avant de charger les traductions
document.addEventListener('DOMContentLoaded', function () {
    loadTranslations(); // Charger les traductions au chargement de la page
});