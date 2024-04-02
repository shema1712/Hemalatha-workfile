function findIntersection(array1, array2) {
  var intersection = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        intersection.push(array1[i]);
      }
    }
  }
  return intersection;
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
