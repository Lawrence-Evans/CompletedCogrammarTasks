// I have now declared a function as a parameter for
// myFilterFunction so that it will use the one given and no other.
// Unlike before where I accessed it directly from outside the function.
// Thanks for pointing that out.

// Initially I made the lengthCheck function a variable as I thought
// this was neccessary so it could be parsed as a variable don't know way I thought that.

// Declaring and printing an array with Nutmeg, Willow and Bridge as the only three 6 letter words.
let wordArray = [
  "Dolphin",
  "Sand",
  "Cup",
  "Nutmeg",
  "Ball",
  "Train",
  "Willow",
  "Granite",
  "Bridge",
  "Scorpian",
];
console.log(wordArray);

// My filter function expects an array and funcyion. Interates through any array with any function it is given as a callback.
// If callback returns true the word is pushed to a new array then returns the filtered array.
function myFilterFunction(array, fn) {
  let filteredArray = [];
  for (word of array) {
    if (fn()) {
      filteredArray.push(word);
    }
  }
  return filteredArray;
}

// Callback that returns true checks if a word is 6 letters.
function lengthCheck() {
  if (word.length == 6) {
    return true;
  }
}

// Callback that returns true checks if a word is 4 letters.
function lengthCheckFour() {
  if (word.length == 4) {
    return true;
  }
}

// Calling the function with the callback. Storing it in a variable and printing.
// Checking that myFilterFunction can parse different functions.
const sixLetterArarry = myFilterFunction(wordArray, lengthCheck);
console.log(sixLetterArarry);

const fourLetterArarry = myFilterFunction(wordArray, lengthCheckFour);
console.log(fourLetterArarry);

// // Earlier code verion that checks if the return (specifically for word) from the callback is true before pushing to a new array.

// // My filter function interates through the array with any function it is given as a callback.
// // If callback returns true the word is pushed to a new array.
// function myFilterFunction(wordArray, fn) {
//   let filteredArray = [];
//   for (word of wordArray) {
//     if (fn(wordArray) == true) {
//       filteredArray.push(word);
//     }
//   }
//   return filteredArray;
// }

// // Callback that checks if a word is 6 letters and returns true.
// function lengthCheckSix() {
//   if (word.length == 6) {
//     return true;
//   }
// };

// // Calling the function with the callback. Storing it in a variable and printing.
// const sixLetterArarry = myFilterFunction(wordArray, lengthCheckSix);
// console.log(sixLetterArarry)

// // Checking that myFilterFunction can parse different functions.
// // Callback that checks if a word is 4 letters and returns true.
// function lengthCheckFour() {
//   if (word.length == 4) {
//     return true;
//   }
// };

// // Calling the function with the callback. Storing it in a variable and printing.
// const fourLetterArarry = myFilterFunction(wordArray, lengthCheckFour);
// console.log(fourLetterArarry)
