// 19. Check If a String Contains Only Alphanumeric Characters
// Given a string str, return true if str contains only alphanumeric characters, otherwise return false.
// Input: str = "123abc"
// Output: true

function alphaNumeric(myStr) {
  var isMyStr = true;
  for (var i = 0; i < myStr.length; i++) {
    if (!/^[a-z,A-Z,0-9]+$/.test(myStr[i])) {
      isMyStr = false;
    }
  }
  
  return isMyStr;
}
console.log(alphaNumeric("123abc"));
// function containsOnlyAlphanumeric(str) {
//   return /^[a-zA-Z0-9]+$/.test(str);
// }

// // Test the function
// console.log(containsOnlyAlphanumeric("123abc")); // Output: true
