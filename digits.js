// 6. Check If a String Contains Only Digits
// Given a string str, return true if str contains only digits, otherwise return false.
// Input: str = "12345"
// Output: true

function containsDigit(str) {
  var isDigit = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      isDigit = false;
    }
  }
  return isDigit;
}
console.log(containsDigit("12345"));

var mystr = "12345";
var isDigit = true;
for (var i = 0; i < mystr.length; i++) {
  if (mystr[i] < "0" || mystr[i] > 9) {
    isDigit = false;
  }
}
console.log(isDigit);
