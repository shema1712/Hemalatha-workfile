// 11. Count the Number of Occurrences of a Specific Character in a String
// Given a string str and a specific character ch, return the number of times ch occurs in str.
// Input: str = "hello", ch = "l"
// Output: 2

function countOccurences(myStr, ch) {
  var count = 0;
  for (var i = 0; i < myStr.length; i++) {
    if (myStr[i] == ch) {
      count++;
    }
  }
  return count;
}
console.log(countOccurences("hemalatha", "a"));
