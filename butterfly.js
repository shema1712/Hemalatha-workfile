// // Problem 15: Butterfly Pattern
// // *        *
// // **      **
// // ***    ***
// // ****  ****
// // **********
// // **********
// // ****  ****
// // ***    ***
// // **      **
// // *        *

var n = 5;
for (var i = 1; i <= n; i++) {
  rows = "";
  for (var j = 1; j <= i; j++) {
    rows += "*";
  }
  for (var k = 1; k <= 2 * (n - i); k++) {
    rows += " ";
  }
  for (var l = 1; l <= i; l++) {
    rows += "*";
  }
  console.log(rows);
}
for (var i = n; i >= 1; i--) {
  rows = "";
  for (var j = 1; j <= i; j++) {
    rows += "*";
  }
  for (var k = 1; k <= 2 * (n - i); k++) {
    rows += " ";
  }
  for (var l = 1; l <= i; l++) {
    rows += "*";
  }
  console.log(rows);
}
