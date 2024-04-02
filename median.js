function findMedian(array) {
  var median = 0;
  var result = 0;
  if (array.length % 2 == 0) {
    var mid = array.length / 2;
    result = array[mid - 1] + array[mid];
    median = Math.floor(result / 2);
  } else {
    var middleIndex = Math.floor(array.length / 2);
    median = array[middleIndex];
  }
  return median;
}
console.log(findMedian([5, 3, 8, 7, 2]));
