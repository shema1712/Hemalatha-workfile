var myString = "madam";
var ispolindrome = true;
for (var i = 0; i < myString.length / 2; i++) {
  if (myString[i] != myString[myString.length - i - 1]) {
    ispolindrome = false;
  }
}
console.log(ispolindrome);
