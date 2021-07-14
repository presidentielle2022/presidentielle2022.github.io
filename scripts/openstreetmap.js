
// On initialise la latitude et la longitude en fonction des données de la bataille(voir bataille.js)
var lat = bataille.coord['lat'];
var lon = bataille.coord['lon'];
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 8);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="https://www.osm.org/copyright">OpenStreetMap</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    // Nous ajoutons un marqueur
    var marker = L.marker([lat, lon]).addTo(macarte);
    marker.bindPopup(bataille.nom);
}
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
	initMap();
};
