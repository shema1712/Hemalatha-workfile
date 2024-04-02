function findMode(array) {
  var maximumNum = [];
  var numbersApp = 0;
  for (var i = 0; i < array.length; i++) {
    var count = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
        if (count > numbersApp) {
          maximumNum = [array[i]];
          numbersApp = count;
        } else if (count === numbersApp && !maximumNum.includes(array[i])) {
          maximumNum.push(array[i]);
        }
      }
    }
  }
  return { maximumNum, numbersApp };
}
console.log(findMode([5, 2, 8, 3, 4, 5, 8, 9, 5]));
var arr = [5, 2, 8, 12, 3, 8, 12, 12];
var maximumNumber = 0;
var maxAppearances = 0;
for (var i = 0; i < arr.length; i++) {
  var count = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) count++;
  }
  if (count > maxAppearances) {
    maximumNumber = arr[i];
    maxAppearances = count;
  }
}
console.log(maximumNumber, maxAppearances);
