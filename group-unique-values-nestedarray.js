let onr = [
  ['fvw',189,'m^2', 0,0,0, 'cement-200', 'water-600', 'sand-4500', null ,null,null ],
  ['fvs',18,'m^3', 0,0,0, 'cement-400', 'water-400', 'sand-500', null ,null,null ],
  ['fvw',189,'m^4', 0,0,0, 'cement-300', 'water-90', 'sand-400', null ,null,null ],
]
let jnm = onr.map((r,i)=>{
  return [r[6],r[7],r[8],r[9],r[10],r[11]]
});

let flatten2 = [].concat(...jnm).filter(e=>{   
  return e;
}).sort();
console.log('flatten2', flatten2);
// 11 - 16
console.log('jnm',jnm)


let on = [
  ['cement-2080', 'water-900', 'sand-4500'],
  ['cement-200', 'water-9500', 'sand-4500'],
  ['cement-200', 'water-900', 'sand-4500']
];



console.log('on', on);
let flatten = [].concat(...on).sort();
console.log('lml', flatten);

const groupUnique = arr => {
  const res = [];
  const map = {};
  arr.forEach(item => {
    const temp = {};
    if (!String(Object.keys(map)).includes(item.split('-')[0])) {
      console.log('dl', item);
      map[item.split('-')[0]] = [];
      temp[item.split('-')[0]] = map[item.split('-')[0]];
      res.push(temp); 
    }
    map[item.split('-')[0]].push(Number(item.split('-')[1]));
  });
  return res;
};

let grouped = groupUnique(flatten)


console.log('grouped2', grouped.map(e=>{
  console.log(e,Object.keys(e)[0],e[Object.keys(e)[0]].reduce((a, b) => a + b))
  let gk = {};
  gk[Object.keys(e)[0]] = e[Object.keys(e)[0]].reduce((a, b) => a + b)
  console.log(gk)
  return gk
}));
 

console.log('grouped', grouped.map(e=>{
  return [Object.keys(e)[0],e[Object.keys(e)[0]].reduce((a, b) => a + b)]
}));