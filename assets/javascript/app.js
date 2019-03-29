var config = {
    apiKey: "AIzaSyDZWfqI5mVkqeFgispuiyvja5NjkpkSEzw",
    authDomain: "train-schedule-b241d.firebaseapp.com",
    databaseURL: "https://train-schedule-b241d.firebaseio.com",
    projectId: "train-schedule-b241d",
    storageBucket: "train-schedule-b241d.appspot.com",
    messagingSenderId: "704345961485"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#train_add").on("click", function (event) {
    event.preventDefault();

    // set variables to grab user input
    var trainName = $("#train_name").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = moment($("#first_train_time").val().trim(), "HH:mm").format('HH:mm');
    var frequency = $("#frequency").val().trim();

    //   store local user input 
    var newTrain = {
        name: trainName,
        destination: destination,
        time: trainTime,
        frequency: frequency
    };

    //updates user input to firebase
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    //   Clears input fields
    $("#train_name").val(" ");
    $("#destination").val(" ");
    $("#first_train_time").val(" ");
    $("#frequency").val(" ");
});