var map = L.map('map', {
    center: [-21.1402, 55.5242],
    draggable: false,
    zoomControl: false,
    zoom: 10
});

map.dragging.disable();

var iconTerra = L.icon({
    iconUrl: 'markeur/logo_terra_test.png',
    iconSize: [88, 95],
    iconAnchor: [44, 95],
    popupAnchor: [100, 200]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 10
}).addTo(map);

var contentsTerra = {
    "Terranimo42": {
        type: 'video',
        src: "video/42.mp4",
        coords: [-20.953960635794427,55.310168996339904]
    },
    "Terranimo41": {
        type: 'video',
        src: "video/41.mp4",
        coords: [-20.897688161918236, 55.49739457348811]
    },
    // Ajoutez d'autres contenus avec leurs identifiants ici (texte, images, etc.)
};

for (var id in contentsTerra) {
    (function(id) {
        var marker = L.marker(contentsTerra[id].coords, { icon: iconTerra }).addTo(map);
        marker.on('click', function(e) {
            openContent(id);
        });
    })(id);
}


function openContent(id) {
    var content = contentsTerra[id];
    if (content) {
        var fullscreenDiv = document.getElementById('fullscreenVideo');
        if (content.type === 'video') {
            var videoElement = document.getElementById('myVideo');
            videoElement.setAttribute('src', content.src);
            fullscreenDiv.style.display = 'block';
            videoElement.play();
        } else {
            // Traiter les autres types de contenus ici
        }
    }
}

var closeButton = document.getElementById('closeVideo');
closeButton.onclick = function() {
    var videoElement = document.getElementById('myVideo');
    videoElement.pause();
    videoElement.currentTime = 0;
    var fullscreenDiv = document.getElementById('fullscreenVideo');
    fullscreenDiv.style.display = 'none';
}

function openFullscreenContent(htmlContent) {
    var fullscreenDiv = document.getElementById('fullscreenContent');
    var innerContentDiv = document.getElementById('innerContent');
    
    innerContentDiv.innerHTML = htmlContent;  // Remplir la div avec le contenu HTML fourni
    fullscreenDiv.style.display = 'block';
}

// Bouton de fermeture pour la div de contenu
var closeContentButton = document.getElementById('closeContent');
closeContentButton.onclick = function() {
    var fullscreenDiv = document.getElementById('fullscreenContent');
    fullscreenDiv.style.display = 'none';
}

var htmlContent = `
    <h2>Titre</h2>
    <p>Texte descriptif ici.</p>
    <img src="path/to/image.jpg" alt="Description" width="200">
    <a href="https://www.example.com">Lien vers un site</a>
`;

var htmlMarker = L.marker([-21.20083963749789, 55.57803128152648], { icon: iconTerra }).addTo(map);
htmlMarker.on('click', function() {
    openFullscreenContent(htmlContent);
});




map.on('click', onMapClick);
