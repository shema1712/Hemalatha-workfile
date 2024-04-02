// 1. Concatenate Two Strings Without Using the + Operator
// Given two strings str1 and str2, return a new string that is the concatenation of str1 and str2.
// Input: str1 = "Hello", str2 = "World"
// Output: "HelloWorld"
function findStr(str, str1) {
  var str = "Hello";
  var str1 = "World";
  var result = `${str} ${str1}`;
  return result;
}

console.log(findStr());

function findVowels(string) {
  var vowels = "aAeEiIoOuU";
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(findVowels(" hi my name is HemAlathA"));

function findSpaces(string) {
  var result = " ";
  var countSpaces = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == result) {
      countSpaces++;
    }
  }
  return countSpaces;
}

console.log(findSpaces("My Name is Hemalatha hello"));
