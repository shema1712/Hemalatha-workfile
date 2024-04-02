function sortArray(array) {
  isSorted = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
}
console.log(sortArray([1, 2, 3, 4, 5]));
