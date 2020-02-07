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
    $("#AddTrain").on("click", function(event) {
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
    database.ref().on("child_added", function(snapshot) {
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
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  
  
      
  
  
  
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  }); // END - $(document).ready(function () 