var myObj = {
  name: "Hemalatha",
  id: 102,
  city: "chennai",
  Address: {
    no: 15,
    place: "Madurai",
  },
  hobbies: ["book", "music"],
};
delete myObj.Address.place;
console.log(myObj);
