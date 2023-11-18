const queryObject = {
    name: "John",  
    age: 30,
    city: "",
    country: "USA",
    isAdmin: false,
};

console.log(Object.entries(queryObject).map(([key,value])=>{
   return `${key}  ${value}`
}),'result')
console.log(queryObject['name']='priyanka','john')

const fruitsname = {
    apple:"strogest fruit"
   }
   
   console.log(fruitsname.apple="delicious ")

   //copy the refference of obj,i will not create new obj
const objectX=  {
    name:"priyanka",
    address:{city:"delhi"}
      
      
  }
  
  const objectY = {...objectX } //deep copy ,copy all obj not refference
  
  objectY.name = "maku"
  console.log(objectX,"maku")  

  const exampleObject = {
    key1: true,
    key2: false,
    key3: true,
  };
  
  const keys = Object.keys(exampleObject);
  
  console.log(keys);
  
  const obj = {category:'priyanaka'}
console.log(obj.hasOwnProperty('category'))

function sum({num1,num2}){ //where you needa obj,fun,arr value you will use curly brace and pass the value
    console.log(num1,num2,"num1,num2")
   }
   
   const addnum = {num1:5,num2:10}  //this is first way of destrucuring in fun
   console.log(addnum,"addnum")
   console.log(sum({num1:10,num2:20}),"sum") //this is second way of destrucuring in fun
   
   let person = {name:"priyanka",class:"college"};
let person1 = {...person,city:"delhi",address:"kirari"}
 console.log(person1,'itirable,expanded,element')



const name = "priyanka"
for (let myname in name){     //get key obj in the case of obj , but in array and string provide index num
console.log(myname,'priyanka')  // use in instead of ("in")  //return index no. of string /array  //enumerable propertis of object
}

const number = [[4,5,6,7,89,2] [7,8,8,9]]
for(const num of number){
console.log(num,'key value of num')
}



localStorage.setItem('name','pihu')

//localStorage understand only string value ,if you wanna store array,object value in localStorage then first you needa to object,array convert into string

const persondetail = {
jobtype:"web developer",
name:"priyanka",
designation:'fresher'
}

localStorage.setItem('persondetail',JSON.stringify(persondetail))
const getpersondetail = localStorage.getItem('persondetail')
const  value = JSON.parse( getpersondetail)
console.log(value,"value")




for (let obj of Object.keys(persondetail)){  //in the case of obj ,forin return keyvalue/propertyvalue  of obj
                                      //Object.keys is used for add more items in the object
console.log(obj,'key of obj')
console.log(persondetail[obj],'keyvalue of obj')


}

for (let i = 0; i<persondetail.length;i++){
console.log(i,'index of persondetail')
}

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
if (obj.hasOwnProperty(key)) {   //hasOwnProperty is used for getting key of object
// console.log(key, 'key of obj');
console.log(obj[key], 'value of obj');

}
}
