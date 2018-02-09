function initMap() {
  var uluru = {lat: -27.617877, lng: 153.035929};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
