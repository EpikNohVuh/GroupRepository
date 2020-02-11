function initMap() {
    // creating intial map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 28.525368, lng: -81.397870 },
        zoom: 11
    });
    // creating markers for all of the dog parks in Orlando
    var marker1 = new google.maps.Marker({
        position: { lat: 28.525368, lng: -81.397870 },
        map: map,
        title: 'Downtown Orlando'
    });
    var Lake_Baldwin_Dog_Park = new google.maps.Marker({
        position: { lat: 28.585760, lng: -81.327790 },
        map: map,
        title: 'Lake Baldwin Dog Park'
    });
    var Meadow_Woods_Dog_park = new google.maps.Marker({
        position: { lat: 28.373170, lng: -81.344340 },
        map: map,
        title: 'Meadow Woods Dog Park'
    });
    var Park_of_the_Americas = new google.maps.Marker({
        position: { lat: 28.541390, lng: -81.316870 },
        map: map,
        title: 'Park of the Americas'
    });
    var Pawmosa_Dog_Park = new google.maps.Marker({
        position: { lat: 28.675480, lng: -81.340800 },
        map: map,
        title: 'Pawmosa Dog Park'
    });
    var Blue_Jacket_Park = new google.maps.Marker({
        position: { lat: 28.571070, lng: -81.339810 },
        map: map,
        title: 'Blue Jacket Park'
    });
    var Yucatan_Park = new google.maps.Marker({
        position: { lat: 28.545520, lng: -81.296910 },
        map: map,
        title: 'Yucatan Park'
    });
    var Barber_Dog_Park = new google.maps.Marker({
        position: { lat: 28.497940, lng: -81.320310 },
        map: map,
        title: 'Barber Park'
    });
    var Loch_Haven_Park = new google.maps.Marker({
        position: { lat: 28.572100, lng: -81.366821 },
        map: map,
        title: 'Loch Haven Park'
    });
    var Downey_Dog_Park = new google.maps.Marker({
        position: { lat: 28.565820, lng: -81.241680 },
        map: map,
        title: 'Downey Dog Park'
    });
    var Lake_Eola_Park = new google.maps.Marker({
        position: { lat: 28.553300, lng: -81.350000 },
        map: map,
        title: 'Lake Eola Park'
    });
    var West_Orange_Dog_Park = new google.maps.Marker({
        position: { lat: 28.544430, lng: -81.565370 },
        map: map,
        title: 'West Orange Dog Park'
    });
    var Dr_Phillips_Dog_Park = new google.maps.Marker({
        position: { lat: 28.411240, lng: -81.494140 },
        map: map,
        title: 'Dr. Phillips Dog Park'
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<a href="https://en.wikipedia.org/wiki/Downtown_Orlando">' + marker1.title + '</a>'  //add href sources in each marker
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/13098?"> ' + Lake_Baldwin_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/2966"> ' + Meadow_Woods_Dog_park.title + '</a>'  //add href sources in each marker
    });
    var infowindow4 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/12513"> ' + Park_of_the_Americas.title + '</a>'  //add href sources in each marker
    });
    var infowindow5 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/3212?"> ' + Pawmosa_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow6 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/1997?"> ' + Blue_Jacket_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow7 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/15500?"> ' + Yucatan_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow8 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/1897?"> ' + Barber_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow9 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/9795?"> ' + Loch_Haven_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow10 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/2335?"> ' + Downey_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow11 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/76"> ' + Lake_Eola_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow12 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/842?"> ' + West_Orange_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    var infowindow13 = new google.maps.InfoWindow({
        content: '<a href="https://www.bringfido.com/attraction/2342"> ' + Dr_Phillips_Dog_Park.title + '</a>'  //add href sources in each marker
    });
    // //adding listeners for the user's click to add the marker's informational link
    marker1.addListener('click', function () {
        infowindow.open(map, marker1);
    });
    Lake_Baldwin_Dog_Park.addListener('click', function () {
        infowindow2.open(map, Lake_Baldwin_Dog_Park);
    });
    Meadow_Woods_Dog_park.addListener('click', function () {
        infowindow3.open(map, Meadow_Woods_Dog_park);
    });
    Park_of_the_Americas.addListener('click', function () {
        infowindow4.open(map, Park_of_the_Americas);
    });
    Pawmosa_Dog_Park.addListener('click', function () {
        infowindow5.open(map, Pawmosa_Dog_Park);
    });
    Blue_Jacket_Park.addListener('click', function () {
        infowindow6.open(map, Blue_Jacket_Park);
    });
    Yucatan_Park.addListener('click', function () {
        infowindow7.open(map, Yucatan_Park);
    });
    Barber_Dog_Park.addListener('click', function () {
        infowindow8.open(map, Barber_Dog_Park);
    });
    Loch_Haven_Park.addListener('click', function () {
        infowindow9.open(map, Loch_Haven_Park);
    });
    Downey_Dog_Park.addListener('click', function () {
        infowindow10.open(map, Downey_Dog_Park);
    });
    Lake_Eola_Park.addListener('click', function () {
        infowindow11.open(map, Lake_Eola_Park);
    });
    West_Orange_Dog_Park.addListener('click', function () {
        infowindow12.open(map, West_Orange_Dog_Park);
    });
    Dr_Phillips_Dog_Park.addListener('click', function () {
        infowindow13.open(map, Dr_Phillips_Dog_Park);
    });
}