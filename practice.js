var num = 153;
var sum = 0;
var temp = num;
while (temp > 0) {
  var reminder = temp % 10;

  sum += reminder * reminder * reminder;

  temp = Math.floor(temp / 10);
}
if (sum == num) {
  console.log("armstrong number");
} else {
  console.log("not armstrong number");
}
