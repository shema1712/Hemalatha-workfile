// function missingNumber(arr) {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     //console.log(sum);
//   }
//   var n = arr.length + 1;
//   console.log(arr.length);

//   var expectedSum = (n * (n + 1)) / 2;
//   //console.log(n);
//   missingNumber = expectedSum - sum;

//   return missingNumber;
// }
// console.log(missingNumber([1, 2, 4, 5, 6, 7]));
function findMissing(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var n = array.length + 1;
  var result = n * (n + 1);
  var missingNumber = result - sum;
  return missingNumber;
}
console.log(findMissing([1, 2, 3, 4, 6, 7]));
