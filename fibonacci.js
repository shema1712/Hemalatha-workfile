var num = 5;

var num1 = 0;
var num2 = 1;
var num3;
for (var i = 1; i <= num; i++) {
  console.log(num1);
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}
