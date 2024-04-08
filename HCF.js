var num1 = 6;
var num2 = 9;
var hcf;
for (var i = 1; i <= num1 && i < num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}
console.log(`The Hcf of${num1}and ${num2} is ${hcf}`);
