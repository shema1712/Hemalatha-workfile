// 10. Remove All Special Characters From a String
// Given a string str, return a new string that has all special characters removed.
// Input: str = "hello!@#world"
// Output: "helloworld"

function removeSplCharacter(myStr) {
  var newStr = "";
  for (var i = 0; i < myStr.length; i++) {
    if (/[a-z,A-Z,0-9]/.test(myStr[i])) {
      newStr += myStr[i];
    }
  }
  return newStr;
}
console.log(removeSplCharacter("hello!@#world"));
