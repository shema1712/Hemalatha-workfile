// Determine If a String Is a Palindrome
// Given a string str, return true if str is a palindrome, otherwise return false.
// Input: str = "racecar"
// Output: true
// function findPolindrome(string) {
//   var ispolindrome = true;
//   for (var i = 0; i < string.length / 2; i++) {
//     if (string[i] != string[string.length - i - 1]) {
//       ispolindrome = false;
//     }
//   }
//   return ispolindrome;
// }
// console.log(findPolindrome("racecar"));

var myStr = "racecar";
var ispolindrome = true;
for (var i = 0; i < myStr.length / 2; i++) {
  if (myStr[i] != myStr[myStr.length - i - 1]) {
    ispolindrome = false;
  }
}
console.log(ispolindrome);
