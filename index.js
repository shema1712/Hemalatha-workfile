function findIndex(array) {
  var result = 8;
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == result) {
      index = i;
    }
  }
  return index;
}
console.log(findIndex([5, 2, 8, 12, 3]));
