// Import stylesheets
import './style.css';
import './compare-objects-by-dates.js';
import './group-elements-in-array.js';
//import './group-unique-values-nestedarray.js';

let kl = [
 "1-Site clearing-e",
 "9-Site clearing-i",
 "1-Clear site of grasses, rubbish, etc. and remove debris from site-2-BF-0001",
 42,
 24,
 "3-Substructure-e",
 "2-Blockwork in foundation-i",
 "137-230mm thick hollow sandcrete blocks size 450 x 225mm compressive strength 3.5N/mm2 in cement mortar (1:3), filled solid with weak concrete-2-BF-0127",
 36,
 32
]

console.log(kl)
let k= 0;
//for(let i of kl){
  for (let i = 0; i < kl.length; i++) {
    //console.log(i)
  if(kl[i] === "1-Clear site of grasses, rubbish, etc. and remove debris from site-2-BF-0001"){
    let km = [...kl];

    km = [...km.slice(i)]
    km.shift()
  
    for(let e of km){
      console.log('i',e)
      if(typeof e != 'string'){
        k+=e
       
      }
      if(typeof e === 'string')break;
    }
 
  }
  //console.log('i',i)
  
}
console.log('k',k)