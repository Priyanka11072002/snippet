
function minus(c){
    const a = 40
    
    return console.log(a + c)
      
    }
    
    function sub(){
    return console.log("hello callback function ")
    }
    
    const storesubfun = sub()  //can not be called function in the variable  ,acc to me , should print here console value 
    
    
    function sum(a,b,callback,rest) {
        // console.log(rest()," callback value ")  undefined  ,get value call without console and return statement ,can not store in variable 
      const c = "priyanka"
      const name = callback(c)
      console.log(name,"name")
      
      console.log(a+b) 
    
      let school  = "skv"
    return 
    }
    let name = 10
    let frd = 40
    sum(name,frd,minus,sub)
    
    