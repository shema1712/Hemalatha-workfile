function secondMaximum(array) {
  var maximum = 0;
  var secondMax = 1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
      secondMax = maximum;
      maximum = array[i];
    } else if (array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}
console.log(secondMaximum([5, 6, 7, 1, 9]));
