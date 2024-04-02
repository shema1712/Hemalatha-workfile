function findSpace(myStr) {
  var space = " ";
  var count = 0;
  for (var i = 0; i < myStr.length; i++) {
    for (var j = 0; j < space.length; j++) {
      if (myStr[i] == " ") {
        count++;
      }
    }
  }
  return count;
}
console.log(findSpace("My Name is Hemalatha"));
