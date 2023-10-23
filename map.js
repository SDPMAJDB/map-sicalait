var map = L.map('map', {
    center: [-21.1402, 55.5242],
    draggable: false,
    zoomControl: false,
    zoom: 10
});

map.dragging.disable();

var iconTerra = L.icon({
    iconUrl: 'markeur/logo_terra_test.png',
    iconSize: [88, 95], // Taille de l'icône. Ceci dépend de la taille de votre image.
    iconAnchor: [44, 95], // Point de l'icône qui sera positionné à l'emplacement exact du marqueur.
    popupAnchor: [100, 200] // Point depuis lequel le popup doit s'ouvrir par rapport à iconAnchor.
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom:10
}).addTo(map);

/** Marqueurs */

var marker = L.marker([-20.953960635794427, 55.310168996339904],{ icon: iconTerra }).addTo(map);
marker.on('click', openFullscreen);

function openFullscreen() {
    var fullscreenDiv = document.getElementById('fullscreenVideo');
    fullscreenDiv.style.display = 'block';
    var videoElement = document.getElementById('myVideo');
    videoElement.play();
}

var closeButton = document.getElementById('closeVideo');
closeButton.onclick = function() {
    var videoElement = document.getElementById('myVideo');
    videoElement.pause();
    videoElement.currentTime = 0;
    var fullscreenDiv = document.getElementById('fullscreenVideo');
    fullscreenDiv.style.display = 'none';
}

 map.on('click', onMapClick);