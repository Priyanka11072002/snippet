const myObj = {a: "p", b: "m", c: "r"};
const myArray = Object.keys(myObj).map(key => myObj[key]);
console.log(myArray); // [p,m,r] value of obj



const myARRay = [{name: "John"}, {name: "Jane"}, {name: "Bob"}];

const length = myARRay.length; // returns 3
console.log( length," length ")


//length of obj,Object.key length
const name = [{title:"mrs"},{first:"priyanka"},{last:'kumari'}]
console.log(name.length,"3") 
console.log(Object.keys([0]),"title:mrs")

const results1 = [[{title:"mr"}],[{first:"a"}],[{sec:"b"}]]
console.log( results1," results1")

const arr = [{a:1},{b:2},{c:3}]  
console.log([...arr],"arr")

const results = [[{a:1},{B:2},{c:3}],[{d:4},{e:5}],[{f:6},{g:7}]]   //[{...}]
console.log(results.length,"lots of obj in arro")



const ARRAY = [[1,2,3,4],[4,5,6],[6,7]]
console.log(ARRAY.length,"ARRAY")  //output index,arr4,3,2,length
function value(){
 let name;   
const OBJECT = [{name:"pihu"},{money:1000000}]
console.log({... OBJECT,name:OBJECT[0].name}," OBJECT")
}
value()
    
const user = await fetch('https://randomuser.me/api').then(res=>res.json())
console.log(user)


const username = [[{title:"mrs"},{first:"pihu"},{last:"kumari"}],[{title:"mrs"},{first:"kuhu"},{last:"kumari"}]]
console.log(username,"username")


const userConfig: UserPreferences = {
    theme: 'dark',
    language: 'en',
    fontSize: '16px',
  };
  
  // Accessing properties dynamically
  const selectedTheme = userConfig['theme'];
  const selectedLanguage = userConfig['language'];
  
  console.log(`Selected theme: ${selectedTheme}`);
  console.log(`Selected language: ${selectedLanguage}`);
  