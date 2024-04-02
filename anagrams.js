// Check If Two Strings Are Anagrams
// Given two strings str1 and str2, return true if str1 is an anagram of str2, otherwise return false.
// Input: str1 = "listen", str2 = "silent"
// Output: true

function areAnagrams(str1, str2) {
  var newstr1 = str1.split("").sort().join("");
  var newstr2 = str2.split("").sort().join("");

  return newstr1 === newstr2;
}

console.log(areAnagrams("listen", "silent"));
