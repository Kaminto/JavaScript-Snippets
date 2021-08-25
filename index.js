// Import stylesheets
import './style.css';
import './compare-objects-by-dates.js';
import './group-elements-in-array.js';
var filter = {
  address: 'u',
  age: '',
  paymentTypes: 'mobile'
};
var users = [
  {
    name: 'John',
    email: 'johnson@mail.com',
    paymentTypes: [{ name: 'credit' }, { name: 'mobile' }],
    age: 25,
    address: 'USA'
  },
  {
    name: 'Tom',
    email: 'tom@mail.com',
    paymentTypes: [{ name: 'loan' }],
    age: 35,
    address: 'England'
  },
  {
    name: 'Mark',
    email: 'mark@mail.com',
    paymentTypes: [{ name: 'mobile' }],
    age: 28,
    address: 'England'
  }
];

users = users.filter(function(item) {
  for (var key in filter) {
    if (key === 'paymentTypes') {
      // console.log(filter[key].length);
      if (filter[key].length === 0) {
        return true;
      }
      if (item[key] != undefined) {
        let home = item[key].filter(function(elements) {
          if (elements['name'] === filter[key]) {
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
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function invoiceid() {
  var d = new Date().getTime();
  //   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  var uuid = 'xxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
let st = [
  ['6-Roof-n'],
  ['25-Roof covering-n'],
  ['51-roof covering a.b.d.-2'],
  [null]
];
st = [].concat(...st);
let po;

let k = 15,
  count = 0,
  des = [],
  tms = [];
for (let a = 0; a < 2; a++) {
  //k -= a;
  count += 1;
  //tms.push(k)
  //console.log('a', a);
}
//console.log('tmse', count);

//console.log(po);
let conc = 2;

let dim = [4, 7, null, null, null];

let sq = [null, 28, null, null, null];

let desc = [
  '51-roof covering a.b.d.-2',
  null,
  null,
  null,
  '52-Ditto ridge cap n/e 450mm girth-1'
];

for (let r=0; r < sq.length; r++) {
  if (sq[r]) {     
    po = {value:sq[r],index:r};
    break;
  }
}
//console.log(po);
let dimFormat = []
for (let l=0; l < dim.length; l++) {
  if (dim[l]) {     
    dimFormat.push(dim[l]);    
  }
}
//console.log(dimFormat.reduce((a, b) => Number(a) * Number(b)));

let on = [
  ['fv',189,'m^2', 0,0,0, 'cement-200', 'water-900', 'sand-4500' ],
  ['fv',189,'m^2', 0,0,0, 'cement-200', 'water-900', 'sand-4500' ],
  ['fv',189,'m^2', 0,0,0, 'cement-200', 'water-900', 'sand-4500' ],
]

console.log('on', on);
 