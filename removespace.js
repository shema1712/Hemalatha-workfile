// 9. Remove All Spaces From a String
// Given a string str, return a new string that has all spaces removed.
// Input: str = "hello world"
// Output: "helloworld"

function removeSpace(myStr) {
  var newStr = "";
  for (var i = 0; i < myStr.length; i++) {
    if (myStr[i] != " ") {
      newStr += myStr[i];
    }
  }
  return newStr;
}
console.log(removeSpace("hello world"));
