var map = L.map('map', {
    center: [-21.1402, 55.5242],
    draggable: false,
    zoomControl: false,
    zoom: 10
});

map.dragging.disable();


// Marqueurs
var iconTerra = L.icon({
    iconUrl: 'markeur/logo_terra_test.png',
    iconSize: [88, 95],
    iconAnchor: [44, 95],
    popupAnchor: [100, 200]
});

var iconSicalait = L.icon({
    iconUrl: 'markeur/markeurSicalait.png',
    iconSize: [88, 95],
    iconAnchor: [44, 95],
    popupAnchor: [100, 200]
});

var iconMv = L.icon({
    iconUrl: 'markeur/markeurMv.png',
    iconSize: [88, 95],
    iconAnchor: [44, 95],
    popupAnchor: [100, 200]
});

var iconFj = L.icon({
    iconUrl: 'markeur/markeurFj.png',
    iconSize: [88, 95],
    iconAnchor: [44, 95],
    popupAnchor: [100, 200]
});



// Leaflet


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 10
}).addTo(map);


// Contenu marqueurs

var contents = {
    "Terranimo42": {
        type: 'video',
        src: "video/42.mp4",
        coords: [-20.953960635794427,55.310168996339904],
        icon: iconTerra
    },
    "Terranimo41": {
        type: 'video',
        src: "video/41.mp4",
        coords: [-20.897688161918236, 55.49739457348811],
        icon: iconTerra
    },
    "SicalaitSiege": {
        type: 'video',
        src: "video/siege_sicalait.mp4",
        coords: [-21.200809629418348, 55.57807419686832],
        icon: iconSicalait
    },
    "Magasinvert": {
        type: 'html',
        content: "<h2>Bienvenue au Point B</h2><p>Ceci est un contenu HTML pour le Point B.</p>",
        coords: [-21.290516198219105, 55.5129043755783],
        icon: iconMv
    },
    "Fermesetjardins": {
        type: 'video',
        src: "video/fermesetjardins.mp4",
        coords: [-21.29266447265784, 55.4072135545414],
        icon: iconFj
    },
    // Ajoutez d'autres contenus avec leurs identifiants ici (texte, images, etc.)
};


for (var id in contents) {
    (function(id) {
        var marker = L.marker(contents[id].coords, { icon: contents[id].icon }).addTo(map);
        marker.on('click', function(e) {
            openContent(id);
        });
    })(id);
}


function openContent(id) {
    var content = contents[id];
    if (content) {
        var fullscreenDivVideo = document.getElementById('fullscreenVideo');
        var fullscreenDivContent = document.getElementById('fullscreenContent');
        
        if (content.type === 'video') {
            var videoElement = document.getElementById('myVideo');
            videoElement.setAttribute('src', content.src);
            fullscreenDivVideo.style.display = 'block';
            videoElement.play();
        } else if (content.type === 'html') {
            var contentContainer = document.getElementById('contentContainer');
            contentContainer.innerHTML = content.content;
            fullscreenDivContent.style.display = 'block';
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

map.on('click', onMapClick);
