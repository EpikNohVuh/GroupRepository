
$(document).ready(function () {

  // Initialize FireBase

  var firebaseConfig = {
    apiKey: "",
    authDomain: "service-storage-9ff7a.firebaseapp.com",
    databaseURL: "https://service-storage-9ff7a.firebaseio.com",
    projectId: "service-storage-9ff7a",
    storageBucket: "service-storage-9ff7a.appspot.com",
    messagingSenderId: "769919220049",
    appId: "1:769919220049:web:e68a565de3e4de2d737b70"
  };

  firebase.initializeApp(firebaseConfig);


  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";
  var nextArrival = "";
  var minutesAway = "";
  var currentTime = moment();

  console.log('CURRENT TIME: ' + moment(currentTime).format('hh:mm:ss A'));

  // Capture Button Click
  $("#AddTrain").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes

    trainName = $("#TrainName").val().trim();
    destination = $("#Destination").val().trim();
    firstTrain = moment($("#FirstTrain").val().trim(), "HH:mm").subtract(1, "years").format("X");
    frequency = $("#Frequency").val().trim();

    var database = firebase.database();


    // Code for handling the push
    database.ref().push({
      TrainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $('.form-control').val("");



  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // // Console.loging the last user's data
    // console.log(sv.TrainName);
    // console.log(sv.destination);
    // console.log(sv.firstTrain);
    // console.log(sv.frequency);

    var TrainName2 = sv.TrainName;
    var destination2 = sv.destination;
    var firstTrain2 = sv.firstTrain;
    var frequency2 = sv.frequency;

    var firstTimeConverted = moment(firstTrain2, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency2;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency2 - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


    // Add each train's data into the table
    $("#tbodyTrain").append("<tr><td>" + TrainName2 + "</td><td>" + destination2 + "</td><td>" + frequency2 +
      "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");



    // Handle the errors
  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);


  });


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

});























