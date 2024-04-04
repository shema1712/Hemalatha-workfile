// Problem 8: Hollow Inverted Right Triangle Pattern
// *****
// *   *
// *  *
// * *
// *

var n = 5;
for (var i = n; i >= 1; i--) {
  rows = "";
  for (var j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      rows += "*";
    } else {
      if (i == n) {
        rows += "*";
      } else {
        rows += " ";
      }
    }
  }
  console.log(rows);
}
