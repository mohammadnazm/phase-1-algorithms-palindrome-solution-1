// Function to check if a given string is a palindrome
function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowercasedWord = word.toLowerCase();

  // Reverse the string
  const reversedWord = lowercasedWord.split("").reverse().join("");

  // Check if the original and reversed strings are the same
  return lowercasedWord === reversedWord;
}

/* 
  Pseudocode:
  - Convert the input word to lowercase to make the comparison case-insensitive
  - Reverse the string
  - Check if the original word and the reversed word are the same
  - If they are the same, return true (it's a palindrome), otherwise return false

  Explanation:
  The function first converts the input word to lowercase to make the comparison case-insensitive. 
  Then, it reverses the string using the split, reverse, and join methods. Finally, it compares the original and reversed strings. 
  If they are the same, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.

  Test Cases:
  - Test with "racecar": Expecting true
  - Test with "robot": Expecting false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
