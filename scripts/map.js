//correspond au centre de la france
const lat = 47.72990523080585;
const lon = 2.711988011395912;
const link = "bataille.html?id=";
var macarte;
var markerCluster;
var markersID = {};
var batailles = data['batailles']['bataille'];

//filtres
var filtres = {
    "q":null,
    "deb":null,
    "fin":null
};

const createMarkers = () => {
    //crée des marqueurs et les affiche si la bataille associé au marqueur correspond aux filtres
    batailles.forEach((item, i) => {
        var lat = item.coord['lat'];
        var lon = item.coord['lon'];
        var titleLink = "<strong><a target='_blank' style='text-decoration:none' href="+link+i+">"+item.nom+"</a></strong>";
        if (filterAccept(item)){
            createOneMarker(markerClusters,macarte,lat,lon,titleLink );
        }
    });
};
////////////////
const createOneMarker = (cluster, carte, lat, lon, popupString) => {
    var marker = L.marker([lat, lon]);
    marker.bindPopup(popupString);
    cluster.addLayer(marker); // Nous ajoutons le marqueur aux groupes
    carte.addLayer(cluster);
};
//////////////////
const filterSearch = (item) => {
    var q = filtres["q"];
    if (q !== null && q!== "" && typeof q == "string" ){
        if (item.nom.toUpperCase().includes(q.toUpperCase())){ //methode pour être insensible à la casse
            return true;
        }
        return false;
    }
    return true; //si null on considère que l'item correspond au filtre
};
//////////////////////
const filterDateInterval = (item) => {
    var deb = filtres["deb"];
    var fin = filtres["fin"];

    if (deb !== null && fin !== null && isNaN(deb) === false && isNaN(fin) === false){
        var annee = item.date.split("-")[2];
        if (annee >= deb && annee <= fin){
            return true;
        }
        return false;
    }
    return true; //si null on considère que l'item correspond au filtre
};
/////////////////////
const filterAccept = (item) => {
    if (filterSearch(item) && filterDateInterval(item)){
        return true;
    }
    return false;
};
//////////////////
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 6);
    markerClusters = L.markerClusterGroup(); // Nous initialisons les groupes de marqueurs
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="https://www.osm.org/copyright">OpenStreetMap</a>',
        zoomControl: true,
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    macarte.zoomControl.setPosition('bottomleft');
    //creation des marqueurs
    createMarkers();
}
////////////////////////
const trierButtonOnClick = () => {
    markerClusters.clearLayers();
    filtres["q"] = document.getElementById("q").value;
    filtres["deb"] = Number.parseInt(document.getElementById("deb").value);
    filtres["fin"] = Number.parseInt(document.getElementById("fin").value);
    //console.log(filtres);
    createMarkers();
    document.getElementById('modal').style.display='none';
    var nbOfResults = markerClusters._topClusterLevel._childCount;
    alert(nbOfResults+" bataille(s) trouvée(s) correspondant à vos critères...");

};
////////////////////////

/****************************************/
window.onload = function(){
    initMap();
};
