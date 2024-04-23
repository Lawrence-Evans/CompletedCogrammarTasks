// Setting variables to hold the intervalID and counter
let intervalID;
let counter = 0;

// Original submission IGNORE. Variable containing a function that console logs
// an incremnting counter every second
// let startCounter = function() {
//     intervalID = setInterval(function () {
//         counter ++, console.log(counter)}, 1000);
// };

// This variable now excepts a callback instead of the increment and print code
// being in the same block. 
let startCounter = function() {
    intervalID = setInterval(callback, 1000);
};

// Callback function that increments the counter and prints in to console.
function callback() {
    counter ++, console.log(counter);
};

// A function to clear the intervalID and stop it running code.
function stopCounter() {
    clearInterval(intervalID);
};

// Variables linked to html elements
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// Event listener to call timer functions
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);

// Okay I know this task is named callBack so I should have used one. But in all
// honesty as the instructions didn't prompt me to use one I carried on and did it
// without one initially causing more work for everyone.

// I noticed that startCounter can be called multiple times speeding up the count, is
// this becaues there are now multiple instances of intervalID in that window? It can not be stopped
// with stopCounter in the same way however. Is there a common fix for this?