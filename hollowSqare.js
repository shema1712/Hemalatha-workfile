// Problem 10: Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****
var n = 5;
console.log("*****");
for (var i = 1; i <= n; i++) {
  console.log("*   *");
}

console.log("*****");

// another method
var n = 5;

// Iterate through each row
for (var i = 1; i <= n; i++) {
  var row = ""; // Initialize row for each iteration

  // Iterate through each column in the row
  for (var j = 1; j <= n; j++) {
    // Check if we're at the edge or corners of the square
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*"; // Add a star if it's an edge or corner
    } else {
      row += " "; // Otherwise, add a space
    }
  }

  // Print the constructed row
  console.log(row);
}
