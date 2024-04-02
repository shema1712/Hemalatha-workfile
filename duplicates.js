function findDuplicate(array) {
  var duplicate = [];
  for (var i = 0; i < array.length; i++) {
    if (!duplicate.includes(array[i])) {
      duplicate.push(array[i]);
    }
  }
  return duplicate;
}
console.log(findDuplicate([1, 2, 2, 3, 4, 4, 5, 6]));
