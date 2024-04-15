// I have made use of a for loop but it is not strictly needed to reach the answer of the task
// as the index of the numbers to be swapped is known.
// prompt for 3 digit or greater number.
num = prompt("Enter a number of no less than 3 digits.");


// Turn string into an array and save second and last digits as variables using at()
let numArray = num.split("");

// Variables to use in for loop 
let length = num.length;
let secondDigit = numArray.at(1);
let lastDigit = numArray.at(-1);

// Displaying relevant variables as multiline alert
alert("Num length = " + length + "\nSecond digit = " + secondDigit + "\nLast digit = " + lastDigit);

// Looping through numArray. If the second digit is reached it is spliced with the lastDigit 
// and the last digit spliced with the secondDigit only if the "if" is false and "else if" is true
// then the array join into a string and displayed as an alert where both numbers are easily compared.
for (i=0; i <= length; i++) {
    if (i == 1) {
        numArray.splice(i, 1, lastDigit);
    } else if (i == (length - 1)) {
        numArray.splice((i), 1, secondDigit);
        alert("Original number   = " + num + "\nSwapped number = " + numArray.join(""));
    };
};