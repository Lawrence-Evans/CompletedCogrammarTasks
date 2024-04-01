text1 = prompt("Enter a word or sentence to see if it is a palindrome.");
// Accepts a word or phrase with or without spaces.
text2 = text1.replace(/\s/g, '').toLowerCase();
let i = 0
let textLength = text2.length

console.log("Word length " + textLength);

while (i <= (textLength / 2 - 1)) {
    console.log(i)
    console.log(textLength - i - 1)
    if (text2.charAt(i) === text2.charAt(textLength - i - 1)) {
        console.log(text2 + " is a palindrome");
    } else { 
        console.log(text2 + " is not a palindrome");
        break
    }
    i++;
}