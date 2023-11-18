const sentence = "Hello, world!";
const substring = sentence.split('r');       
const slicemethod = sentence.slice(6)        //first case  ,provide value after 6     world!       
const slicemethod1 = sentence.slice(0,5)     //second case , takes value start from 0 index and excluding 5 index after comple counting give the value
const slicemethod2 = sentence.slice(0,-6)  
const concatstring = "concatstring  used for adding two string items"
console.log(substring); 
console.log(slicemethod)
console.log(slicemethod2)
console.log(sentence.concat(concatstring))

//immutable string
const createImmutable = "hello,immutable"
const imutable = `${createImmutable} + i am immutable which can not change orginal value of first string location`
console.log(imutable)
console.log(createImmutable)



//mutable :you can modify the original value , apply  some operate like add,delete,update
const mutableobj = {name:'pihu',hobbies:'story writting and travelling'}
const mutableBehaviour = {name:'pihu',hobbies:'story writting and travelling'}
mutableobj.name = "priyanka"
delete  mutableBehaviour.name

console.log(mutableobj,'mutableobj')

console.log(mutableBehaviour,'mutableBehaviour')

const girl = "i am :beautiful girl"
console.log(girl.split(": "),'name')

const csvData = "John Doe 25 New York";
const values = csvData.split(" :"); 
console.log(values); 
