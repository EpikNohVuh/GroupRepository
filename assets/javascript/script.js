$(document).ready(function () {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfiz_DbXYiXTrzVb60KKajtYEhL98aZps",
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
  var comments = "";

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