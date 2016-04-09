var map = new L.Map('map', {
    scrollWheelZoom: false
  }).setView( [40.730982,-73.997340], 10);


    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);

    var layerUrl = 'http://va663.cartodb.com/api/v2/viz/adfb27da-fdba-11e5-8229-0e3ff518bd15/viz.json';

    cartodb.createLayer(map, layerUrl)
      .addTo(map)
      .on('done', function(layer) {
      }).on('error', function() {
        //log the error
      });