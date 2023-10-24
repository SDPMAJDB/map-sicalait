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

var iconSicalaitmin = L.icon({
    iconUrl: 'markeur/markeurSicalait.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, 0]
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

var iconFjmin = L.icon({
    iconUrl: 'markeur/markeurFj.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, 0]
});

var iconMvmin = L.icon({
    iconUrl: 'markeur/markeurMv.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, 0]
});

// Leaflet online
/**
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 10
}).addTo(map);
*/

// Leaflet Offline

L.tileLayer('tiles/{z}/{x}/{y}.png', {
    maxZoom: 10,
    minZoom: 10
}).addTo(map);


// Contenus + marqueurs

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
        type: 'popup',
        content: "<h2>Magasin Vert</h2><p>Lieu dit quatre cents Lotissement Cardamones, 97432, La Réunion</p>",
        coords: [-21.290516198219105, 55.5129043755783],
        icon: iconMvmin
    },
    "Fermesetjardins29": {
        type: 'video',
        src: "video/stlouis.mp4",
        coords: [-21.29266447265784, 55.4072135545414],
        icon: iconFj
    },
    "Fermesetjardins27": {
        type: 'popup',
        content: "<h2>FERMES & JARDINS Saint Joseph </h2><p>27 RUE RAPHAEL BABET, 97480 SAINT-JOSEPH</p>",
        coords: [-21.379827694135955, 55.608301600206936],
        icon: iconFjmin
    },
    "Fermesetjardins26": {
        type: 'popup',
        content: "<h2>FERMES & JARDINS Sainte Clotilde</h2><p>87 Av. Stanislas Gimart, Sainte-Clotilde 97490, La Réunion</p>",
        coords: [-20.89799020965027, 55.475365884748776],
        icon: iconFjmin
    },
    "Fermesetjardins22": {
        type: 'popup',
        content: "<h2>FERMES & JARDINS Saint-André </h2><p>120 Chemin Pente Sassy, St André 97440, La Réunion</p>",
        coords: [-20.96466717610631, 55.65821009791505],
        icon: iconFjmin
    },
    "Fermesetjardins23": {
        type: 'html',
        content: '<div class="centered-image"><img src="image/stpaul.png" alt="Image de St. Paul"></div>',
        coords: [-20.98329945983677, 55.29403329812029],
        icon: iconFjmin
    },
    "Fermesetjardins24": {
        type: 'popup',
        content: '<h2>FERMES & JARDINS Tampon 14ème </h2><p>211 Rue Georges Pompidou, Le Tampon 97430, La Réunion</p>',
        coords: [-21.251879030926123, 55.52076151454591],
        icon: iconFjmin
    },
    "Fermesetjardins21": {
        type: 'popup',
        content: '<h2>FERMES & JARDINS Tampon 600 </h2><p>19 Rue du Dr Henri Roussel, Le Tampon 97430, La Réunion',
        coords: [-21.279791128490782, 55.5117989555919],
        icon: iconFjmin
    },
    "Sicalaitpalmiste": {
        type: 'html',
        content: '<div class="centered-image"><img src="image/pdp.png" alt="Image de St. Paul"></div>',
        coords: [-21.131775162840892, 55.628404470934015],
        icon: iconSicalait
    },
    "Sicalaitplainedesgregues": {
        type: 'popup',
        content: '<h2>SICALAIT Plaine des Grègues </h2><p>139 Chemin du rond Plaine des Gregues, 97480, La Réunion</p>',
        coords: [-21.321040397382536, 55.60634613095116],
        icon: iconSicalaitmin
    },
    "Sicalaitjeanpetit": {
        type: 'popup',
        content: '<h2>SICALAIT Jean Petit </h2><p>2 Rue Galant, Rte de Jean Petit, Saint-Joseph 97480, La Réunion</p>',
        coords: [-21.33850267648706, 55.629382384008174],
        icon: iconSicalaitmin
    },
    "Sicalaitlachaloupe": {
        type: 'popup',
        content: '<h2>SICALAIT La Chaloupe </h2><p>12 Chem. Vaudeville, Saint-Leu 97416, La Réunion</p>',
        coords: [-21.146743167276618, 55.31984584284487],
        icon: iconSicalaitmin
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
        } else if (content.type === 'popup') {
            var popupContent = content.content;
            L.popup()
             .setLatLng(content.coords)
             .setContent(popupContent)
             .openOn(map);
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
/**
function openFullscreenContent(htmlContent) {
    var fullscreenDiv = document.getElementById('fullscreenContent');
    var innerContentDiv = document.getElementById('innerContent');
    
    innerContentDiv.innerHTML = htmlContent;  // Remplir la div avec le contenu HTML fourni
    fullscreenDiv.style.display = 'block';
}*/

// Bouton de fermeture pour la div de contenu
var closeContentButton = document.getElementById('closeContent');
closeContentButton.onclick = function() {
    var fullscreenDiv = document.getElementById('fullscreenContent');
    fullscreenDiv.style.display = 'none';
}

map.on('click', onMapClick);
