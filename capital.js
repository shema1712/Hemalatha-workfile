// 4. Capitalize the First Letter of Each Word in a String
// Given a string str, return a new string where the first letter of each word is capitalized.
// Input: str = "hello world"
// Output: "Hello World"

function capitalLetter(myStr) {
  var newStr = myStr.split(" ");
  for (var i = 0; i < newStr.length; i++) {
    if ((newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1))) {
      var str = newStr.join(" ");
    }
  }
  return str;
}
console.log(capitalLetter("my name is hema latha"));
