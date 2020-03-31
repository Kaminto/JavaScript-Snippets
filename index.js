// Import stylesheets
import "./style.css";
import "./compare-objects-by-dates.js";
var filter = {
  address: "u",
  age: "",
  paymentTypes: "mobile"
};
var users = [
  {
    name: "John",
    email: "johnson@mail.com",
    paymentTypes: [{ name: "credit" }, { name: "mobile" }],
    age: 25,
    address: "USA"
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    paymentTypes: [{ name: "loan" }],
    age: 35,
    address: "England"
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    paymentTypes: [{ name: "mobile" }],
    age: 28,
    address: "England"
  }
];

users = users.filter(function(item) {
  for (var key in filter) {
    if (key === "paymentTypes") {
     // console.log(filter[key].length);
      if (filter[key].length === 0) {
        return true;
      }
      if (item[key] != undefined) {
        let home = item[key].filter(function(elements) {
          if (elements["name"] === filter[key]) {
            return true;
          }
        });
        if (home.length > 0) {
          return true;
        }
      }
    }
  }
});

//console.log(users);
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;
