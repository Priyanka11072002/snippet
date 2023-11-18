// function checkAdult(age){

//     if(age>=18){
//        return true 
//     }else{
//      return false   
//     }
//     return 
// }

// console.log(checkAdult(),"it's not  indicate to adult person")

// const userage = 30
// if(checkAdult(userage)){
//   console.log("i'm 18")  
// }else{
//     console.log("i'm not 18")  
  
// }

function checkRequired(...inputArr) {

 
    /*
    Returns true if any input in the given array is empty (null, undefined, or ''), and false otherwise.
    */
    let isRequired = false;
       
   
    for (let i = 0; i < inputArr.length; i++) {
   
      if (!inputArr[i] || inputArr[i] === '') {
        isRequired = true;
        break;
      }
    }
    console.log(`Input is required: ${isRequired}`,"boolean value");
  }
  
  const formInputs = ['John', '', 'Doe'];
  checkRequired(10,'8',5,6,7,'7',9,9); // Output: Input is required: true
  