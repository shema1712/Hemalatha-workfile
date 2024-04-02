// 5. Reverse a String Without Using the reverse() Method
// Given a string str, return a new string that is the reverse of str without using the reverse() method.
// Input: str = "hello"
// Output: "olleh"
var myStr = "hello";
var newStr = " ";
for (var i = myStr.length - 1; i >= 0; i--) {
  newStr += myStr[i];
}
console.log(newStr);
