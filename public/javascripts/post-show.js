mapboxgl.accessToken ='pk.eyJ1IjoiYW9sYXVzb3JvIiwiYSI6ImNqenBpOWQzdDBvMXQzcHIyOGozY3E3ZncifQ.8wV5H_F4ru0Q0yUhUBT3kQ';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: post.coordinates,
zoom: 5
});

// create a HTML element for our location/ marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
.setLngLat(post.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>')).addTo(map);

// Toggle Edit review form
$('.toggle-edit-form').on('click', function() {
  //toggle the edit button on click
  $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
  //toggle the visibility of the edit review form
  $(this)
    .siblings('.edit-review-form')
    .toggle();
});