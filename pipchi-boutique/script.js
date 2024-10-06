// Barre de progression de défilement
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Afficher la popup après 5 secondes
window.onload = function() {
    setTimeout(function() {
        document.getElementById('emailPopup').style.display = 'flex';
    }, 5000);
};

// Fermer la popup avec un bouton plus visible
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('emailPopup').style.display = 'none';
});

// Afficher le bouton "Retour en haut" lorsque l'utilisateur fait défiler vers le bas
var scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Lorsque l'utilisateur clique sur le bouton, revenir en haut de la page
scrollTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
