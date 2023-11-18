
const cache = {}
function add(sum){
    console.log(cache,'cache value')
    if( sum in cache){
        return "no thanks "
    }else{
      console.log("where is cache stopping")   
       cache[sum]  = sum+10 
    }
return sum+20
    
}
console.log(add(10))
console.log(add(10))
console.log(add(20))
console.log(add(10))



// let cache = {}

// function  add(num) {
//         console.log(cache,'cache   ')

//     if(cache[num]){

//         console.log(cache[num]," unexpexted value")

//     }else{
//                  cache[num] = num +50
             
//          console.log(cache[num],"i don' know what is the output of that (4)")
//     }
    
// }
// console.log(add(10))
// console.log(add(10))
// console.log(add(20))
// console.log(add(40))


// function memorization(n){
//     let sum = 0
//      console.log(n,'n')
//   for(let i = 0;i<=n;i++){
//      sum+=i
// } 
   
//       return sum
// }
// console.time()
// console.log(memorization(5))
// console.timeEnd()


// const memorize = (fun)=>{
//   console.time(fun)
// let cache = {}
//   return function(...args){
    
//   }
  
// }
// memorize ();


//memoriazation is a technical process which saved times of developers and inc high performance of our application && optimization of expensive function which
//takes lot's of time which affect on our storage  in that case wh have have cache , cache is just like object  & memory which set unique key and value 
//which is provided when same set uf argument we have   //time taking ,full your storage , dec your performance and efficiency of your app


function withoutCache (num){
    return num
   
 }
  // console.log(withoutCache (10))
  // console.log(withoutCache (10))
  // console.log(withoutCache (10))
  // console.log(withoutCache (10))
 
 const cache = {}
 function withCache(num){
   console.log(cache,'cache')
  if(num in cache){            //two way to write this code 1 num in cache  2 cache[num]
    return cache[num]
  }else{
     console.log("taking time to reload this execute only one time before execute else condition")
    cache[num] = num + 40
    console.log(cache[num],'frirst execute this one')
    
  }
 }
 cache[10] = 100
 withCache(10)
 withCache(10)
 withCache(20)
 withCache(50)
 
          
 
 