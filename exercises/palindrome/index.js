// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution 2
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

palindrome("racecar")
//Solution 1
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("")
//   return str == reversed
// }

//My Solution #2
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("")

//   for (let i in str) {
//     if (str[i] == reversed[i]) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

//My Solution #1
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed);
//   if (str == reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

module.exports = palindrome;
