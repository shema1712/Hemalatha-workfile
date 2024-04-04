// Problem 4: Hollow Inverted Pyramid Pattern
// *********
//  *     *
//   *   *
//    * *
//     *
var n = 5;
for (var i = n; i >= 1; i--) {
  rows = "";
  for (var j = 1; j <= n - i; j++) {
    rows += " ";
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    if (k == 1 || k === 2 * i - 1) {
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
