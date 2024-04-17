// Setting variables to hold the intervalID and counter
let intervalID;
let counter = 0;

// Variable containing a function that console logs
// an incremnting counter every second
let startCounter = function() {
    intervalID = setInterval(function () {
        counter ++, console.log(counter)}, 1000);
};

// A function to clear the intervalID and stop it running code.
function stopCounter() {
    clearInterval(intervalID);
};

// Variables linked to html elements
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// Event listener to run timer functions
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);

// I was badly confused by the starting code from startCounter being a variable 
// with a function inside. As I tried to follow the examples on W3 and mdn I 
// kept getting the syntax wrong as I muddled having a function nested in a function.
// I am not convinced I have completed the task elegantly. The rest was straight forwared.

// I noticed that startCounter can be called multiple times speeding up the count, is
// this becaues there are now multiple instances of intervalID? It can not be stopped
// with stopCounter in the same way however. Is there a common fix for this?