// Guess whole forgot to upload the correct file to dropbox
// Fixed the issue of displaying both "is and is not a palindrome"

// prompt accepts a word or phrase with or without spaces.
text1 = prompt("Enter a word or sentence to see if it is a palindrome.");
text2 = text1.replace(/\s/g, "").toLowerCase();
let i = 0;
let textLength = text2.length;

// While loop interates through only half the length of the text that is expected to be the same.
// Ignoring the need to check the middle letter in odd lengthed text.
// -1 shifts textlength to the corresponding index of the letter.
while (i <= textLength / 2 - 1) {
  // Compares the first and last index. Then i iterates to compare the next two sets of letters and so on.
  if (text2.charAt(i) === text2.charAt(textLength - i - 1)) {
    i++;
    // Nested "if" so the is palindrome alert only appears once all letters have been checked.
    if (i == Math.round(textLength / 2 - 1)) {
      alert("Yes " + text1 + " is a palindrome");
    }
    // Break needed to stop the while loop returning the No alert infinitely.
  } else {
    alert("No " + text1 + " is not a palindrome");
    break;
  }
}
