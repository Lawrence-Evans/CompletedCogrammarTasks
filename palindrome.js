// prompt accepts a word or phrase with or without spaces.
text1 = prompt("Enter a word or sentence to see if it is a palindrome.");
text2 = text1.replace(/\s/g, '').toLowerCase();
let i = 0
let textLength = text2.length

// console.log("Word length " + textLength);

// While loop interates through only half the length of the text that is expected to be the same. 
// Ignoring the need to check the middle letter in odd lengthed text. 
// -1 shifts textlength to the corresponding index of the letter. 
while (i <= (textLength / 2 - 1)) {
    // console.log(i)
    // console.log(textLength - i - 1)
    // Compares the first and last index. Then i iterates to compare the next two sets of letters and so on.
    if (text2.charAt(i) === text2.charAt(textLength - i - 1)) {
        console.log(text1 + " is a palindrome");
    } else { 
        console.log(text1 + " is not a palindrome");
        break
    }
    i++;
}