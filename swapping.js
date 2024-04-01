//prompt for 3 digit or greater number. Creates variable of string length
num = prompt("Enter a number of no less than 3 digits.");

// Turn string into an array and save second and last digits as variables using at() see below for why 
let numArray = num.split("")

let length = num.length;

let secondDigit = num.charAt(1);
let lastDigit = num.charAt(num.length -1);

console.log("Second digit = " + secondDigit);
console.log("Last digit = " + lastDigit);
console.log("Original number = " + num);

for (i =0; i < length; i++) {
    if (i == numArray[1]) {
        numArray.splice(1, 1, lastDigit);
        numArray.splice(-1, 1, secondDigit);
        console.log("Swapped number = " + numArray.join(""));    
    }
}