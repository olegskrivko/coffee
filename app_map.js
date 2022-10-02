// add custom icons
var orangeIcon = L.icon({
    iconUrl: 'hot-coffee-orange.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'hot-coffee-red.png',
    iconSize:     [50, 50], 
    iconAnchor:   [25, 25], 
    popupAnchor:  [0, -25]
});

var violetIcon = L.icon({
    iconUrl: 'hot-coffee-violet.png',
    iconSize:     [50, 50],
    iconAnchor:   [25, 25], 
    popupAnchor:  [0, -25] 
});

// add points
var caffeine1 = L.marker([56.9494302, 24.0816495], {icon: orangeIcon}).bindPopup('Caffeinex, Āzenes iela 7, Rīga'),
    caffeine2 = L.marker([56.944047, 24.0792367], {icon: orangeIcon}).bindPopup('Caffeinex, Nometņu iela 3, Rīga'),
    caffeine3 = L.marker([56.9471562, 24.1126959], {icon: orangeIcon}).bindPopup('Caffeinex, Audēju iela 18, Rīga'),
    caffeine4 = L.marker([56.9297973, 24.0363014], {icon: orangeIcon}).bindPopup('Caffeinex, Lielirbes iela 30, Rīga');

var doublecoffee1 = L.marker([56.9829154, 24.1967005], {icon: redIcon}).bindPopup('Double Coffeex, Brīvības iela 372, Rīga'),
    doublecoffee2 = L.marker([56.9509056, 24.1057944], {icon: redIcon}).bindPopup('Double Coffeex, Vaļņu iela 14, Rīga');
    doublecoffee3 = L.marker([56.9471575, 24.1184364], {icon: redIcon}).bindPopup('Double Coffeex, Stacijas laukums 4, Rīga');

var molttocoffee1 = L.marker([56.9586099, 24.1170898], {icon: violetIcon}).bindPopup('Moltto Coffeex, Krišjāņa Valdemāra iela 41, Rīga'),
    molttocoffee2 = L.marker([56.9489959, 24.1018951], {icon: violetIcon}).bindPopup('Moltto Coffeex, Miesnieku iela 17, Rīga');

// create layer groups    
var caffeine = L.layerGroup([caffeine1, caffeine2, caffeine3, caffeine4]);
var doublecoffee = L.layerGroup([doublecoffee1, doublecoffee2, doublecoffee3]);
var molttocoffee = L.layerGroup([molttocoffee1, molttocoffee2]);

// create basemap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

// add basemap, layer groups when map is opened
var map = L.map('map', {
    center: [56.9474451, 24.0967936],
    zoom: 13,
    layers: [osm, caffeine, doublecoffee, molttocoffee]
});

var overlayMaps = {
    "Caffeinex": caffeine, 
    "Double Coffeex": doublecoffee,
    "Moltto Coffeex": molttocoffee
};

var layerControl = L.control.layers(null, overlayMaps).addTo(map);


