

//let and const are block scope ,it's refers the area within pair of the curly brace,top to bottom 
let x ="hello,javascript"
x="hello,world"
console.log(x,"block scope")


function scope(){
let x = "block scope"    //x is declared within the function block scope
 if(true){
  let y = "the area within pair of the curly brace ,accessable the declaration value"   
     console.log(x,"accessable,execute ,provide refference error")
     console.log(y,"declaration")
 }   

    console.log(x,"x")
    //console.log(y,"y")

    
}

scope()


function scope1(){
let PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variabl
    console.log(PI,"Assignment to constant variable")
}
scope1()


//in js anonymous function is a function ,that doesn't have name ,it can be declare function using function keyword without specify name for function
//it assign function to the variable using of let var const keyword


// let  sum = function(a,b){
//   return a+b  
// }

// sum(55+60)


//default parameter allow function parameter to be intilized with default value if value are not passed if values are undefined
function greet(name="priya"){
    console.log( ` hello ${name}`,'if no value are passed  if the value are undefined')
    
}
  
  console.log(greet("mak") )




let promise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve("promise is a object  eventally completion or failure of the asynochronous operator")  
    },3000)
    
    
})
console.log(promise,'eventally completion or failure of the asynochronomous operator')



//rest parameter :indefinate number of argument as an array ,ti allow to function takes variable number of argument ,...
function restparameter(a,b,...rest){
    console.log(a,b,rest,'indefinate no. of argument as an array')
    
}
 restparameter(4,5,6,7,7,8,9)


function indefinateNo (...rest){
   
    return rest.reduce((a,b)=>a+b)
}
indefinateNo (7,8,9,5,3,2,7,8)

//rest parameter is a way to represent indefinate no. of argument as an array ,...,it allow to function takes variable number of argument



//closure is a function that has to access the variable in its outer scope even after outer function has returned
function outerfunction(){
    let outerVariable = "that has to access the variable in its outer scope"
    function innerfunction(){
    console.log(outerVariable,'outerVariable')
    }
return innerfunction
    }
console.log(outerfunction()(),'nested function')


//let ,var,const

//let allow we to reassign the value to the variable ,it is a block level function scope

console.log(name,'name')
function blockscope(){
   let name;
name="priyanka"

}
blockscope()


//const  we declare and initialize the value of variable  together  otherwise  console.log(,'')  //missing initializer in const declaration//block fun scope
const color = 'green'

console.log(color,'color')

//block,function,local,globle
//var  is function scope ,we can use same declarATION AGAIn and change declaration value,access the value of variable from outside of function,
//we can use var variable with same declaration ang assign the value but not in let keyword

var hobbies = "travelling"
var hobbies = "phothography"
console.log(hobbies,'hobbies')


//let and const are block scoped  declaration  console.log(,'')   we declare the variable x using let keyword inside the function (example) if block we
//declare another variable x with other value.
function  example(){
const x = 10
    if (true){
       const x = 30
         console.log(x,'output:30') 
    }
     
      console.log(x,'output:10')  
}
example()



//anonymous function especially iife,function expression,callback ,define function inline without explicity naming them ,providing flexiblity,code concise

//define the  anonyomous function using function keyword without giving it name,assign the anonymous function to the variable using let,var,const keyword ,after assign the anonymous 
//invoke the function

const greeting = function(){
     console.log(' hello beautiful word')  
}
greeting()

function sum(a,b){
   return a+b 
}
sum(4,5)

const num = (a,b)=> a+b  
console.log(num(8,9))

const arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.filter((data)=>data>3))



//function takes the other function as argument of this paramenter ,function calls callback function as at the appropirate time, allowing for execute to another 
//code,action after initial function has completed

function num1(value,callback){
console.log(value,'value')
       callback()  
     }              
  function add(){
     console.log('function call the callback function at the appropriate time')       //function call the callback function at the appropriate time,allowing for execute the another code,action after initial fun has completed
  }  
 

num1(567,add)  //function take another function as a argument in this parameter

//asynchronous  

function asynchronous(callback){
    let callbackfun = "asynchrous operation,event handling ,various other scenerio whewe we want to define custiom behavioue to be execuited at specific point in code"
 console.log('in js asynchronous refers to ability to execute code without blocking the execuition of the main program(1)')
setTimeout(function(){
    let data = "the execuition of the main program"
    console.log(data,'data(3)')
},100000)
    callback(callbackfun)
    
}

function callbackfun(value){
     console.log(value,'value (2)')
    
}
asynchronous(callbackfun)







//===does not perform type coercion ,we shoud have same type of operand  return false operand have different types
function Typecoercion(){
    let x = "1234"
    let y = 1234
    if(x==y){
     console.log("==perform coercion type ,it convert operand to the same type before making comparision")   
    }
}
 Typecoercion()

 console.log(1=="1")  //output true        ===output false

//ex of undefined value would be variable that has been declared but has not been assigned value yet
let notassigned;


 console.log(notassigned===undefined,"undefined TRUE")
//defined,varable that has been assingned value         let x ="assigned value"
//an ex of  a null value  would  be variable that has been intentially assing value of null ,it has no value    ex let x = null;

const nullValue = null
 console.log(nullValue===null,'null  are explicit set represent no value,variable that has been intentiall assing the value of null ts has no value')


//class component:

class car{
 constructor(name,buyingYear,sellingYear){
  this.name = name
  this.buyingYear = buyingYear
  this.sellingYear = sellingYear
 }priya() {
 return `Hello, my  favourite car name is ${this.name} and I am ${this.age} years old.`;
 }

}

const mycar = new car ("audi",2015,2020)
console.log(mycar.priya(),'mycar')





//how user can add in my function
function sum(...arr){
    let result = 0
    for(let i=0;i<arr.length;i++){
        result = result+arr[i]    
        console.log(result,'')   
    }
}
sum(2,3,4,1,2,5,64,6,7,7,6,2,1,3,4,5)
//how user can add in my function


//first method :how user can find even num in my function
function evennum(){
    let resultEven = []
   let resultOdd = []
     for(let i=0;i<20;i++){ 
        if(i%2==0){
            console.log(i,'i')  
           const even = i 
            resultEven.push(even)
        }

         if(i%2!==0){
            console.log(i,'i')  
           const odd = i 
            resultOdd.push(odd)
        }
     } 
    return {even:resultEven,odd:resultOdd}
 }
evennum()
//how user can find even num in my function



//second method :how user can find even num in my function
function secondevenmethod(...arr){
 console.log(arr%2===0,'false')  
  console.log(arr%2!==0,'true') 
    const evennumber = []
     const oddnumber = []
  //find first even num in this arr  
  for(let evennum of arr) {
    
      if(evennum%2===0){
         evennumber.push(evennum)
      }

       if(evennum%2!==0){
         oddnumber.push(evennum)
      }
  }
    return  {even:evennumber,odd:oddnumber}
   //find first even num in this arr    
}

secondevenmethod(3,4,5,2,3,7,5,6,8,9,10,12,13,4)
//second method :how user can find even num in my function



//how user can create table 
function createTable(args){
  const table = args +'1'
     let anytable =[] 
    for(let i=args;i<table;i=i+args){
        anytable.push(i)
        }
   return  anytable
}
createTable(68)
//how user can create table 


//how user find prime number
function primenumber(...args){
 // console.log(,'') 
   
    const prime =[]
   for(let num of args){
        let primeboolean = true
       let squareRoot = Math.sqrt(num)
       console.log(squareRoot,'squareRoot')
       if(num<=1){
       
        primeboolean = false   
       }else if(num===2){
           prime.push(num)}
       // }else if(let i = 3;i<=math.sqrt(num);i++){
           
       // }

       
   }
   return prime 
}
primenumber(3,4,5,2,3,7,5,6,8,9,10,12,13,4)
//how user find prime number