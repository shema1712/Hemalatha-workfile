var num1 = 8;
var num2 = 6;
var hcf;
for (var i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}
console.log(hcf);
var lcm = (num1 * num2) / hcf;
console.log(`the LCM of${num1}and ${num2} is${lcm}`);
