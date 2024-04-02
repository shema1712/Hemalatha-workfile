function secondMinimum(array) {
  var minimum = Infinity;
  var secondMin = Infinity;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      secondMin = minimum;
      minimum = array[i];
    } else if (array[i] < secondMin) {
      secondMin = array[i];
    }
  }
  return secondMin;
}
console.log(secondMinimum([5, 2, 8, 9, 10, 1]));
