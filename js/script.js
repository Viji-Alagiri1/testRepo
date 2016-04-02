var basemapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

  //initialize map2
  var map2 = L.map('map2', {
    scrollWheelZoom: false
  }).setView( [40.718640,-74.014206], 10);//new coord

  //CartoDB Basemap
  L.tileLayer(basemapUrl,{
    attribution: attribution
  }).addTo(map2);

  //load external geojson
  $.getJSON('data/cities.geojson', function(data) {
    console.log(data);

    //displaylegend: true;

    //icon to point river location
    var riverIcon = L.icon({
      iconUrl: 'img/gradeA.png',
      iconSize:     [37, 37], // size of the icon
      iconAnchor:   [16, 37] // point of the icon which will correspond to marker's location
    });
    //icon to point PARK location
    var parkIcon = L.icon({
      iconUrl: 'img/ferriswheel.png',
      iconSize:     [37, 37], // size of the icon
      iconAnchor:   [16, 37] // point of the icon which will correspond to marker's location
    });
    //icon to point Mountain location
    var mountainsIcon = L.icon({
      iconUrl: 'img/mountains.png',
      iconSize:     [37, 37], // size of the icon
      iconAnchor:   [16, 37] // point of the icon which will correspond to marker's location
    });
    //icon to point to the places I have been to
    var visitedIcon = L.icon({
      iconUrl: 'img/sight-2.png',
      iconSize:     [37, 37], // size of the icon
      iconAnchor:   [16, 37] // point of the icon which will correspond to marker's location
    });
    //icon to point to the places I Plan on Visiting
    var futureIcon = L.icon({
      iconUrl: 'img/palm.png',
      iconSize:     [37, 37], // size of the icon
      iconAnchor:   [16, 37] // point of the icon which will correspond to marker's location
    });

  
  
    L.geoJson(data, 
    {
      //calling L.geoJson with pointToLayer as an option will automatically add markers to the map from our data
      pointToLayer: function (feature, latlng) {

          console.log(feature);
          //places I visited had beautiful river-front
          if(feature.properties.river == "true") {
            return L.marker(latlng, {icon: riverIcon})
              .bindPopup('I visited a beautiful river in ' + feature.properties.name);
          } //parks that visited and had fun
          else if(feature.properties.park == "true") {
            return L.marker(latlng, {icon: parkIcon})
              .bindPopup('I had lots of fun in this ' + feature.properties.name  + ' amusement park.');
          }
          //mountains that I climbed on
          else if(feature.properties.mountains == "true") {
            return L.marker(latlng, {icon: mountainsIcon})
              .bindPopup('I climbed this ' + feature.properties.name  + ' mountain.');
          } 
          //simply the places I visited for vacations
          else if(feature.properties.visited == "true") {
            return L.marker(latlng, {icon: visitedIcon})
              .bindPopup('I had good memories of visiting ' + feature.properties.name  + ' on a recent vacation.');
          } 
          //places that I plan on visiting in future: "My Future Road Trips"
          else {
            return L.marker(latlng, {icon: futureIcon})
            .bindPopup('I plan on visiting ' + feature.properties.name + ' on furture vacation.');;
          }
      }
    }
    ).addTo(map2);

})
 