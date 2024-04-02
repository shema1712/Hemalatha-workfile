// 12. Convert a String to camelCase
// Given a string str, return a new string where spaces are replaced by camel case.
// Input: str = "hello world"
// Output: "helloWorld"

function convertCamelCase(myStr) {
  var newStr = myStr.split(" ");

  for (var i = 1; i < newStr.length; i++) {
    if ((newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1))) {
      var str = newStr.join("");
    }
  }
  return str;
}
console.log(convertCamelCase("hello world"));
