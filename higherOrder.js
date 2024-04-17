// Declaring an array with Nutmeg, Willow and Bridge as the only three 6 letter words.
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

// My filter function interates through the array with the callback to check if
// each word is 6 letters. If callback returns true the word is pushed to a new array.
function myFilterFunction() {
  let filteredArray = [];
  for (word of wordArray) {
    if (myCallback(wordArray) == true) {
      filteredArray.push(word);
    }
  }
  console.log(filteredArray);
}

// Callback that checks if a word is 6 letters and returns true.
let myCallback = function lengthCheck() {
  if (word.length == 6) {
    return true;
  }
};

// Calling the function with the callback.
myFilterFunction(wordArray, myCallback);

// // Built in JS filter function to compare
// let FilterFunctionResult = wordArray.filter((word) => word.length == 6);
// console.log(FilterFunctionResult);