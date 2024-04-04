// Problem 7: Inverted Right Triangle Pattern
// *****
// ****
// ***
// **
// *

var n = 5;
for (var i = n; i >= 1; i--) {
  rows = "";
  for (var j = 1; j <= i; j++) {
    rows += "*";
  }
  console.log(rows);
}
