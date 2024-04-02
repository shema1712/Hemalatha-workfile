function findSmall(array) {
  var small = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < small) {
      small = array[i];
    }
  }
  return small;
}
console.log(findSmall([0, 5, 8, 6, 4, -2]));
