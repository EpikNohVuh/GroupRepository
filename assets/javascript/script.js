
$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "orlandodogpark.firebaseapp.com",
    databaseURL: "https://orlandodogpark.firebaseio.com",
    projectId: "orlandodogpark",
    storageBucket: "orlandodogpark.appspot.com",
    messagingSenderId: "911883291547",
    appId: "1:911883291547:web:48b1af4faa64944b1cef3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values

  var breed = "";
  var park = "";
  var time = "";
  var owner = "";
  var comment = "";

  console.log('CURRENT TIME: ' + moment(currentTime).format('hh:mm:ss A'));

  // Capture Button Click
  $("#addDate").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes

    date = $("#date").val().trim();
    time = $("#time").val().trim();
    park = $("#park").val().trim();
    breed = $("#breed").val().trim();
    comment = $("#comment").val().trim();

    console.log(date);
    console.log(time);
    console.log(park);
    console.log(breed);
    console.log(comment);

    var database = firebase.database();
<<<<<<< HEAD

    // Code for handling the push
    database.ref().push({
      date: date,
      time: time,
      park: park,
      breed: breed,
      comment: comment,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $('.form-control').val("");

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    var date2 = sv.date;
    var time2 = sv.time;
    var breed2 = sv.breed;
    var park2 = sv.park;
    var comment2 = sv.comment;

    // Add each owners's data into the table
    $("#playDatePlayBook").append("<tr><td>" + date2 + "</td><td>" + time2 + "</td><td>" + breed2 +
      "</td><td>" + park2 + "</td><td>" + comment2 + "</td></tr>");

    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);

  });

}); // END - $(document).ready(function () 
=======
  
  var mykey = config.mykey;

function initMap() {
    var myLatLng = {lat: 28.525368, lng: -81.397870};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 11
});

var marker1 = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Center of Map'
});  

var marker2 = new google.maps.Marker({
  position: {lat: 28.585760, lng: -81.327790},
  map: map,
  title: 'Lake Baldwin Dog Park'
});

var marker3 = new google.maps.Marker({
  position: {lat: 28.373170, lng: -81.344340},
  map: map,
  title: 'Meadow Woods Dog Park'
});

var marker4 = new google.maps.Marker({
  position: {lat: 28.541390, lng: -81.316870},
  map: map,
  title: 'Park of the Americas'
}); 

var marker5 = new google.maps.Marker({
  position: {lat: 28.418210, lng: -81.229200},
  map: map,
  title: 'Lake District Dog Park'
});

var marker6 = new google.maps.Marker({
  position: {lat: 28.571070, lng: -81.339810},
  map: map,
  title: 'Blue Jacket Park'
});

var marker7 = new google.maps.Marker({
  position: {lat: 28.545520, lng: -81.296910},
  map: map,
  title: 'Yucatan Park'
});

var marker8 = new google.maps.Marker({
  position: {lat: 28.497940, lng: -81.320310},
  map: map,
  title: 'Barber Park'
});

var marker9 = new google.maps.Marker({
  position: {lat: 28.572100, lng: -81.366821},
  map: map,
  title: 'Loch Haven Park'
});

var marker10 = new google.maps.Marker({
  position: {lat: 28.565820, lng: -81.241680},
  map: map,
  title: 'Downey Dog Park'
});

var marker11 = new google.maps.Marker({
  position: {lat: 28.553300, lng: -81.350000},
  map: map,
  title: 'Lake Druid Park'
});

var marker12 = new google.maps.Marker({
  position: {lat: 28.544430, lng: -81.565370},
  map: map,
  title: 'West Orange Dog Park'
});

var marker13 = new google.maps.Marker({
  position: {lat: 28.533630, lng: -81.360030},
  map: map,
  title: 'Greenwood Urban Wetlands'
});

}    
marker1.setMap(map);
marker2.setMap(map);
marker3.setMap(map);
marker4.setMap(map);
marker5.setMap(map);
marker6.setMap(map);
marker7.setMap(map);
marker8.setMap(map);
marker9.setMap(map);
marker10.setMap(map);
marker11.setMap(map);
marker12.setMap(map);
marker13.setMap(map);

>>>>>>> c7226eed916709db524ce381ec1a9b6c568f3ea3
