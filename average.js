function averageOfArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    var average = sum / array.length;
  }
  return average;
}
console.log(averageOfArray([5, 2, 8, 12, 3, 30]));
