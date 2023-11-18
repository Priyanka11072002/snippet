
//spread operater  allow to itirate and expands value in its element

const a = [1,2,3]
const b = [4,5,6]
console.log(...a,...b)

//in the case of obj ,it can create new element in the object                               console.log(,"")
const c = {product:["jeans","suit","top","tshirt"]}
const d = { ...c, product: [...c.product, "lehanga"] };

console.log(d,"lehanga")


const e = {frd:['gun','sun','ran','pan','mak']}
const f = {...e,frd:[...e.frd,'mus']}
  console.log(f,"mus")

const item = {product:["jeans","shirt","tshirt"]}
console.log({...item,product:[...item.product,'saari']})  


//rest parameter         indefinate no . of argument takes in the parament and converts into array ,can not use array method like push ,pop ,rest
//operator represent by ... dots ,always used in last of parameter ,take rest of value from argument  ,best utilize when we using es6 reduce,map,filter,sort
function sum(...rest ){
 return  rest  
}
sum(4,5,6,7,8,9)

const arr = [4, 5, 6, 7, 8, 9, 1, 2];
const arrReduce = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(arrReduce, "arrReduce");

//how to use reduce array method without regular function

const reduceNo = [9,5,6,6,3,5,6,7,8]
debugger
const addareaduce = reduceNo.reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(addareaduce ,"addareaduce")