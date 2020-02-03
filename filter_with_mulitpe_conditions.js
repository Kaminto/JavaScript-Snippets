// Import stylesheets
import "./style.css";
var filter = {
  address: "",
  age: ''
};
var users = [
  {
    name: "John",
    email: "johnson@mail.com",
    age: 25,
    address: "USA"
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 35,
    address: "England"
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 28,
    address: "England"
  }
];

users = users.filter(function(item) {
  for (var key in filter) {
   
    if (
      item[key].toString() === undefined ||
      item[key].toString().toLowerCase().startsWith(filter[key].toString().toLowerCase()) !=
        filter[key].toString().toLowerCase().startsWith(filter[key].toString().toLowerCase())
    )
      return false;
  }
  return true;
});

console.log(users);
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;