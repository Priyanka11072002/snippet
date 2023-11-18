

// Import the isEmpty function

function isEmpty(value) {
    return value === undefined || value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);
}

function validateForm(formData) {
    // formData is an object containing input field values

    for (const key in formData) {
        if (isEmpty(formData[key])) {
            return false; // Return false if any field is empty
        }
    }

    return true; // All fields are non-empty
}

const id = 2

console.log(filtervalue.filter((items)=>items!==id))
const checked = {1:true,2:true,3:true,4:false,5:true}
const filtervalue = [1,2,3,4,5]
const checkedtruevalue = {}
console.log(Object.keys(checked).filter(id=>checked[id]))
function checkedfun(){
    if(id===2){
  for(const id of filtervalue){
 
      if(!checked[id]){
          return false
      }
  }    
        return true
    }
}
checkedfun()



const formInputData = {
    firstName: 'John',
    lastName: '',
    email: 'john@example.com',
    age:40 
};

const isFormValid = validateForm(formInputData);

if (isFormValid) {
    // Proceed with form submission
    console.log('Form is valid. Submitting data.');
} else {
    // Display an error message to the user
    console.log('Form is invalid. Please fill in all fields.');
}


const objproperties = [{name:'p'},{description:'r',category:'i',product:'y'}]  //{name:''}{description: 'r', category: 'i', product: 'y'}category: "i"description: "r"product: "y"[[Prototype]]: Object 
const ids  = ['1','2','3','4']            //1,2,3,4,5
const objfun = (value)=>{
   
   for(let obj of objproperties){
   
       for(let objkey in obj){
     
       if(obj.hasOwnProperty(objkey)){
         console.log(objkey,'key of object') 
       }
   } 
   }

    
}

objfun(objproperties )

