// 2. Count the Number of Vowels in a Given String
// Given a string str, return the number of vowels in the string.
// Input: str = "Hello World"
// Output: 3

function countVowels(myStr) {
  myStr = "Hello World";
  var vowels = "Aa,Ee,iI,Oo,Uu";
  var count = 0;
  for (var i = 0; i < myStr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (myStr[i] == vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(countVowels());
