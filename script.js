
// import mainFunction from 'app.js';
function createCar({brand,model, color, year,type}){


}


createCar('Ford', 'focus');

const car ={
  brand:'ford',
  model: 'focus',
  color: 'red',
  year:'9999',
  type:'fast'
}
createCar(car)

//unresolved , Pending
//Resolved, fulfiled
//rejected
let promise = new Promise((resolved, rejected)=>{
  setTimeout(()=>{
   rejected();
  }, 5000)
})
promise.then(()=>console.log('finished'))
.catch(()=>console.log('not'))

// const url ='http://jsonplaceholder.typicode.com/posts/';
// fetch(url, {
//   method:'post', // εδώ περναμε ένα obj 
//   headers:{
//   'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({title:'a title'}),
//   mode:'cors',
//   //redirect:xxx,
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log('wow', error))


console.log('a string'.repeat( 2 * 3));

var aword = 'camera';
console.log(aword.startsWith('am', 1 ));
console.log(aword.endsWith('me', 4));

// import {
//   sum,
//   otherSum,
//   random,
//   array,
//   obj
// } from './app.js'

// console.log (sum);
// console.log (otherSum);
// console.log (random());
// console.log (array);
// console.log (obj);

function getOrder(){
  return 'this is my order';
}

function * brands(){

  //some function seartch for data in the data base 
  yield 'apple';

  // some function does something else
  yield 'microsoft';
  yield'hp';
  yield'sony';
  yield'mi';

}

let array  = [];

for (var i of  brands()){

  array =[...array,i];
}

console.log(array);
const stores = {

  store1:'a store',
  store2:'another store'
}

const ccar ={

  id:1,
  brand: 'Ford',
  doord: 4,
  wheels: 4,
  color: 'red',
  year:'2017',
  model:'some model',
  stores:stores
}
function *storedGenerator(storesObj){

  yield storesObj.store1;
  yield storesObj.store2
}

function * carsGenerator(carObj){

  yield carObj.brand;
  yield carObj.year;
  yield carObj.model;
  yield* storedGenerator(carObj.stores);

}
let newCar =[];
for(let i of carsGenerator(ccar)){

    newCar = [...newCar,i];
}
console.log(newCar);












