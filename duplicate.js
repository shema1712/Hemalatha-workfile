// 7. Remove Duplicate Characters From a String
// Given a string str, return a new string that has all duplicate characters removed.
// Input: str = "hello"
// Output: "helo"
function removeDuplicate(myStr) {
  var duplicate = " ";
  for (var i = 0; i < myStr.length; i++) {
    if (!duplicate.includes(myStr[i])) {
      duplicate += myStr[i];
    }
  }
  return duplicate;
}
console.log(removeDuplicate("hello"));

var mystr = "hello";
var duplicate = " ";
for (var i = 0; i < mystr.length; i++) {
  if (!duplicate.includes(mystr[i])) {
    duplicate += mystr[i];
  }
}
console.log(duplicate);
