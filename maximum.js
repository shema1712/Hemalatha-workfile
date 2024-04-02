function findMaximum(array) {
  var maximum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}
console.log(findMaximum([2, 10, 45, 26, 84]));
