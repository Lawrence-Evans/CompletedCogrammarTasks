//prompt for 3 digit or greater number. Creates variable of string length
num = prompt("Enter a number of no less than 3 digits.");

// Turn string into an array and save second and last digits as variables using at() see below for why 
let numArray = num.split("")
let secondDigit = numArray.at(1);
let lastDigit = numArray.at(-1);

// Using eg. let lastDigit = numArray[-1]; lead to problems as negative indexing is not built in, returning undefined.
// Various work aroundds are possible eg. let lastDigit = numArray[pets.length -1];

// Displaying relevant variables in console
console.log("Second digit = " + secondDigit);
console.log("Last digit = " + lastDigit);

//Consecutaively splice the second and last digit into their former index's 
numArray.splice(1, 1, lastDigit);
numArray.splice(-1, 1, secondDigit);

// Print to console original number and swapped number
console.log("Original number = " + num);
console.log("Swapped number = " + numArray.join(""));


// // Here extra prompts have been added to choose the positions of the numbers to swap.
// // prompt for 3 digit or greater number. And the positions of the 2 numbers to swap.
// num = prompt("Enter a number of no less than 3 digits.");
// firstNum = prompt("Position of the first number to swap.");
// secondNum = prompt("Position of second number to be swapped with.");

// // Turn string into an array and save second and last digits as variables using at()
// let numArray = num.split("");

// // Variables to use in for loop 
// let length = num.length;
// let numAtFirstIndex = numArray.at(firstNum -1);
// let numAtSecondIndex = numArray.at(secondNum -1);

// // Displaying relevant variables in console
// console.log("num length = " + length);
// console.log("num at first postion " + firstNum + " = " + numAtFirstIndex);
// console.log("num at second postion " + secondNum + " = " + numAtSecondIndex);
// console.log("Original number = " + num);

// // Swapping the numbers using prompts as indexes
// // then the array join into a string for display.
// numArray.splice(firstNum -1, 1, numAtSecondIndex);
// numArray.splice(secondNum -1, 1, numAtFirstIndex);
// console.log("Swapped number = " + numArray.join(""));