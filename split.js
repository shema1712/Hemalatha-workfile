// 17. Split a String Into Words
// Given a string str, return an array of words from str.
// Input: str = "hello world"
// Output: ["hello", "world"]

function intoWords(myStr) {
  var newStr = myStr.split(" ");
  return newStr;
}
console.log(intoWords("hello world"));
