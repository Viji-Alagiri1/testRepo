var basemapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
var layerUrl = 'http://va663.cartodb.com/api/v2/viz/adfb27da-fdba-11e5-8229-0e3ff518bd15/viz.json';


 //initialize map
  var map = new L.map('map', {
    scrollWheelZoom: false
  }).setView( [40.730982,-73.997340], 10);

  //CartoDB Basemap
  L.tileLayer(basemapUrl,{
    attribution: attribution
  }).addTo(map);

   cartodb.createLayer(map, layerUrl)
      .addTo(map)
      .on('done', function(layer) {
      }).on('error', function() {
        //log the error
      });

