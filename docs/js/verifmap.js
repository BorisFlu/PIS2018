/**
 * Display google map or information map when clicking on the location button from the verification page
 */

function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myMAP");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function initMap() {
    var hut = {lat: 11.089677, lng: -73.621499};
    var map = new google.maps.Map(document.getElementById('myMAP'), {
        zoom: 17,
        center: hut,
        mapTypeId: 'satellite',
    });
    var marker = new google.maps.Marker({
        position: hut,
        map: map
    });
    var y = document.getElementById("myMAP");
    y.style.display = "none";
}