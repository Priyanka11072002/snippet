
localStorage.setItem('name','pihu')
const name = localStorage.getItem('name')
console.log(name,'name')

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



