// 1. Concatenate Two Strings Without Using the + Operator
// Given two strings str1 and str2, return a new string that is the concatenation of str1 and str2.
// Input: str1 = "Hello", str2 = "World"
// Output: "HelloWorld"

function concatenationStrings(str1, str2) {
  var str1 = "Hello";
  var str2 = "World";
  var result = `${str1}${str2}`;
  return result;
}
console.log(concatenationStrings("Hello ,World"));
