
(function() {
     //console.log('inside the init');
  var bounds = new L.latLngBounds(config["north_east"], config["south_west"]);
  map = L.map('map',{
    zoomControl:true
  }).setView(config["mapOptions"]["initialCenter"], config["mapOptions"]["zoomLevelMin"]);
  var mapbox = L.tileLayer(config["districtTiles"]);
  mapbox.addTo(map);
  // add the new control to the map

})();