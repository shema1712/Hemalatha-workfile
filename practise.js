var myObj = {
  name: "Hemalatha",
  id: 101,
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "Logged out");
  },
};
