function findRotate(array) {
  var n = 2;
  for (var i = 0; i < n; i++) {
    var firstElement = array.shift();
    array.push(firstElement);
  }
  return array;
}
console.log(findRotate([1, 2, 3, 4, 5]));
