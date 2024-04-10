// Declaring hide function which stores a hide location.
// The nested seek function is returned which logs the hide location.
function hide() {
    // let hideLocation = prompt("Hiding location.");
    let hideLocation = "Tree";

    function seek() {
        let startGame = hideLocation;
        console.log(startGame);
    };
    return seek();
};

// Calling hide function
hide();

// Checks that variables are in closure.
// console.log(hideLocation);
// console.log(startGame);

// Practical Task 2 observation
// Logging hideLocation from outside the hide function results in an "Uncaught ReferenceError: hideLocation is not defined"
// If hideLocation or startGame are not delared as var, let or const they are left globally scoped.
// var (function scope), let (block scope), and const (block scope).