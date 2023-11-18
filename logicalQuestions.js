function primenumber(...args) {
    const prime = [];
  
    for (let num of args) {
    
      let isPrime = true;
  
      if (num <= 1) {
        isPrime = false;
      } else if (num === 2) {
        prime.push(num);
      } else if (num % 2 === 0) {
        isPrime = false;
      } else {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
          console.log(num,'num')
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
  
      if (isPrime) {
        prime.push(num);
      }
    }
  
    return prime;
  }
  
  const primeNumbers = primenumber(3, 4, 5, 2, 3, 7, 5, 6, 8, 9, 10, 12, 13, 4);
  console.log("Prime numbers:", primeNumbers);
  


function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }
  
    return Array.from(duplicates);
  }
  
  
  // const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
  // const result = findDuplicates(myArray);
  // console.log(result); // Output: [2, 3, 8]
  
  let createArr = 20
console.log([...Array(createArr+1).keys()].slice(3,-7)) 

const createArr1 = 20;
console.log([...Array()])


const arr = 10
const createArr3 = [...Array(arr+1).keys()].slice(1)
const createArr4 = [1,2,3,4,1,3,8,4,5,6,7,8,5,6,7]
 console.log(new Set(createArr4))  //removed dublicate element from the arr



const agecategory1 =  '4,5,6,7,5,9,10,22,34,65,12,18,4,5,6,7,8,4,4,5,6,9,3'
console.log(new Set(agecategory1),'index,value,unique key value,also add string as element')  //unique result in the case of string


const filtermethod = [1, 2, 3, 2, 1];
console.log(filtermethod.filter((item, index) =>filtermethod.indexOf(item)));



const evenfun = (...rest) => {
    for (let i = 0; i <rest.length; i++) {
        if(rest[i]%2===0){
           console.log(rest[i])    
        }
  }
}

evenfun(4,5,6,8,9,10,11,13,15,13,6,7,8,9);



function sum(...arr){
    let result = 0

for(let i = 0;i<arr.length;i++){


 result = result+arr[i]


}

return result
}
let arrvalue = [1,2,3,4,5,6,7,8]   
console.log(sum(1,2,3))





function evennumber(){
    let result = []
    for(let i =0 ;i<20;i++){
        if(i%2==0){
           const even = i
           result.push(even)
        }    
     
    }
    return result 
 }
 
 evennumber()
 
 function oddnumber(...arr){
    let result = []
    for(let i =0 ;i<20;i++){   
         
        if(i%2!==0){
           const odd = i
           result.push(odd)
        }    
     
    }
    return  oddnumber
 }
 
 oddnumber(2,3,4,5,6,7,8,9)

 function primenumber(...arr){
   
  let result =[]

for(let i =2;i<arr.length;i++){
let isprime = true
for(let p =2;p<i;p++){
   console.log(p,'p')
if(i%p===0){
 isprime = false
}

 if(isprime){
 result.push(i)
}

}


}

return result
}
primenumber(12,7,3,4,5,6,7,8,9)