// (1)
let firstName = prompt("What is your mother's first name?");

// (2)
let surname = prompt("What is the name of the street you grew up on?");

// (3)
let favColour = prompt("Growing up what was your favourite colour?");

// (4)
let marryYear = prompt("Now. What is your age in whole years?");

// (5)
let friendYear = prompt("Finally give me a number between 1 and 10.");

// (1) + (2)
let bestFriend = firstName + " " + surname

// (4) + (5)
let marriage = Number(marryYear) + Number(friendYear)

// (4) % (5)
let numChildren = marryYear % friendYear

// (4) / (5) rounded
let dyeHair = Math.round(marryYear / friendYear)

console.log(`In ${friendYear} years you are going to meet your best friend named ${bestFriend}. You will get married in ${marriage} years and have ${numChildren} children. In ${dyeHair} years you are going to dye your hair ${favColour}.`);
// Lisa, Giles, Green, 34, 3.