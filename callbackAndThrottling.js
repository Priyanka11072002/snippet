// //think , what is the best for users who will used your project , project always best quality of your website 

// function simplefun(data){
    
//     //console.log("simplefun")  //// first case ::::if you want to get value from fun without write return statement it will give you undefined because you did not return anything only you just call it
   
//     return  data
// }

// function  complexfun(obj,fun,...rest) {
//  //console.log(fun(),"undefined")   // first case ::::if you want to get value from fun without write return statement it will give you undefined because you did not return anything only you just call it

//      setTimeout(()=>{
//        const data = [1,2,3,4,5,6,7,8,9]
//     const datamap = data.map((items)=>items*2)
//     console.log(fun(datamap),"get simplefun")

//     },1000)
    
  
//     return obj.a + obj.b
// }


// let obj = {a:10,b:30}
// complexfun(obj,simplefun,4,5,6,7,8,9)




function handledebouncing(){
    console.log("simple fun handledebouncing") 
  }
  
  function handledebouncing1(){
       console.log("complex fun handledebouncing")    //this one will be undefined 
      return "complex fun handledebouncing"   // with return statement you will get value in console   *********in the return state you don't write to print console down 
  }
  
  const bouncing = handledebouncing1(handledebouncing)
  console.log(bouncing,'bouncing')  //here you get undefined  but you called  handledebouncing1 this fun here that's why giving console.value but you did not write 
  //return statement that's why you getting undefined in this console.
  
  
  
  function handledeThrotting(){
   return "throtting is a awesome features"
  }
  
  
  function handledeThrotting1(fun){
     
      return function (...args) {
          
      setTimeout(() => {
         
        fun(...args);
        
      }, 100);
    };
  
  }
  
  const throtting = handledeThrotting1(handledeThrotting)
  console.log( throtting(),'throtting')
  

  // function handledeThrotting() {
//   return "throttling is an awesome feature";
// }

// function handledeThrotting1(fun) {
//   return function () {
//     setTimeout(() => {
//       fun();
//     }, 100);
//   };
// }

// const throttling = handledeThrotting1(handledeThrotting);
// console.log(throttling(), 'throttling');
