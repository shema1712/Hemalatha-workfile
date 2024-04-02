// 18. Replace All Occurrences of a Specific Character in a String With Another Character
// Given a string str, a specific character ch1, and another character ch2, return a new string where all occurrences of ch1 are replaced by ch2.
// Input: str = "hello world", ch1 = "o", ch2 = "a"
// Output: "hella warld"var myStr = "hello world";
myStr="hello world"
var ch1 = "o";
var ch2 = "a";
var output = myStr.split(ch1).join(ch2);
console.log(myStr.split(ch1));
console.log(output);
