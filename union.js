function findUnion(array1, array2, array3) {
  var uniqueArray = [];
  for (var i = 0; i < array2.length; i++) {
    if (!uniqueArray.includes(array1[i])) {
      uniqueArray.push(array1[i]);
    }
    for (var j = 0; j < array2.length; j++) {
      if (!uniqueArray.includes(array2[j])) {
        uniqueArray.push(array2[j]);
      }
    }
    for (var k = 0; k < array3.length; k++) {
      if (!uniqueArray.includes(array3[k])) {
        uniqueArray.push(array3[k]);
      }
    }
    return uniqueArray;
  }
}
console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6], [7, 8, 9]));
