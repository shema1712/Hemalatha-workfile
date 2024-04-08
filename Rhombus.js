// Problem 11: Rhombus Pattern
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

var n = 5;
for (var i = 1; i <= n; i++) {
  rows = "";
  for (var j = 1; j <= n - i; j++) {
    rows += " ";
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    rows += "*";
  }
  for (var l = 1; l <= n - 1; l++) {
    rows += " ";
  }
  console.log(rows);
}
var n = 5;
for (var i = n; i >= 1; i--) {
  rows = "";
  for (var j = 1; j <= n - i; j++) {
    rows += " ";
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    rows += "*";
  }
  for (var l = 1; l <= n - 1; l++) {
    rows += " ";
  }
  console.log(rows);
}
