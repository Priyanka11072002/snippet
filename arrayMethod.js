 //for each,map,filter,find,reduce,average,sum,product,ACCUMLATED:add all data at one place
//curr:reperesent current data//sum,average ,percentage,multiplication

let arrAY =[8,2,3,4,5,6,7]

let sum = arrAY.reduce((accum,curr)=>{
 debugger
return accum +curr
    
})
console.log(sum,"sum")
 let array = [1,2,3,4,5,6,7,8]

 let  multiply = array.map((accum,curr)=>{

  return accum
 }  ) 
 console.log(multiply)




function checkAge(age){
 if(age<=15){
  console.log("tenager")
 }else{
    console.log("adult")

 }

 
}
checkAge(21)
checkAge(15)


const providedata = {
    name3: "p",
    price: 1000000
  };
  
  // Create an array with a single object
  const dataArray = [{...providedata}];
  
  // Use the forEach method to iterate over the array
  dataArray.forEach((data, index) => {
    console.log(`Data at index ${index}:`, data);
  });
  
  
  const arr = [1,2,3,4,5,6,7]
     console.log(arr.forEach(item=>item),"forEach")


const filterData = arr.filter((data,index)=>
index===1
)

console.log(filterData,'with filter array')

var x = 10


const includesElement = value=>{
    console.log(value,'value')
 const operator = ["+", "-", "*", "/", "."];
   const element =   operator.includes(value)
     console.log(element,'element')  
 includesElement('priyanka')
} 


const arr = [7,9,{name:"priyanka"}]
console.log(arr.includes(9))


// const number3 = [{ x: 4, y: 1 }, { x: 5, y: 2 }, { x: 7, y: 3 }, { x: 6, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 6 }];
// number3.sort((a, b) => b.x-a.x );
// console.log(number3, 'number3');


// const points = [{ x: 3, y: 1 }, { x: 5, y: 2 }, { x: 2, y: 0 },{x:1,y:7},{x:6,y:7},{x:4,y:7}];
// points.sort((a, b) =>  b.x-a.x); // Sorts by x-coordinate in ascending order
// console.log(points,'points');


// const array = [8,6,1,3,2,5,4]
// array.sort((a,b)=>b-a)
// console.log(array, 'array');

const num = [,0,1,2,2,3,4,4,4,5,6,6,7,11]
console.log(num.indexOf(5),'num')        //find the index number of the value , if you write any value which is not inside it so give it -1
// console.log(num.filter((items,index)=>items>10),'less than 10')

// const fruits = ["apple","pineapple","mango","guava","orange"]
// console.log(fruits.filter((items,index)=>items==="pineapple"),'pineaple')

const fruits1 = ["apple","mango","guava","apple","orange","apple","apple"]
console.log(fruits1.filter((items,index)=>fruits.indexOf("apple")===index),'apple')

// const fruitsRepeated = ["apple","mango","guava","apple","orange","apple","apple"]
// console.log(fruitsRepeated.filter((items,index)=>fruitsRepeated.indexOf("apple")===index),'condition')


// const fruits2 = ["apple","mango","guava","apple","orange","apple","apple"]
// console.log(fruits2.filter((items,index)=>fruits.indexOf("apple")!==index),'"mango","guava","apple","orange","apple","apple"')

const filtername =[{name:"phone",description:"awesome"},{name:"dress",description:"short dress is beautiful"}]

console.log(filtername.filter((items)=>{
 return items.name==="dress"
 if(items.name==="dress"){
  return items
 }

}))


const filtername = ["food","dress","place","stationary","phone"]

console.log(filtername.filter((items)=>{

 if(items==="dress"){
  console.log(items,'items')
 }
 return items==="dress"
}))


//spread operator allow an iterable to be  expanded in its element]

const iterable =  [1,2,3,4]
const expanded = [5,6,7,8]
 console.log(...iterable,...expanded)

 //foreach method(itirate ,execuition )

const num = [1,2,3,4,5,6]
num.forEach(function(curr,i,arr){
    return curr+5              //perform operation on each element ,do not create new array ,do not have return statement ,
})
console.log(num ,"foreach method ")            
console.log(num.forEach((items)=>items),'foreach method')
console.log(num.map(item=>item+5),'map method')


console.log(num.map(()=>5),'map method')


const clothes = ["jeans","shirt","paints","dress","frok"]  //when perform same operation on each element of array ,have return statement
const clotheslist = []
console.log(clothes.forEach((items)=>{
   clotheslist.push(clothes) 
   console.log(clotheslist)
}),'forEach method')