const random = Math.round(3.556789*1000)/1000      //math.round give the nearest integers
console.log(random,"randomsudd ");

var color = 6

function getRandom(){
  console.log(Math.round(Math.random()*20+14),"math-round(14-19,33)")  
}
 getRandom()


const selectedSeats = [1,2,3,4,5,6,7]  //selected seats
const  seats = [9,7,6,5,4,3,2,1]
console.log([...selectedSeats].map(seat=>seats.indexOf(seat)))




//math object,random,automatic,0-1,*10(0-9),Math.floor:integers number //100:99no.,  //7(0-6) + remove 0 from starting
//const automaticrandom = Math.floor(Math.random()*6+8)  //15-14 no, 45,:44no. (0,1) 5678910  //8910111213
//console.log(automaticrandom)


//const random = Math.floor(Math.random()*10+10) //remove zero and add 1 no .after completed this process 12345678  345678910
console.log( random)       //min 1 max 6         //10-20  10,11,12,13,14,15,16,17,18,19,             10-20 inclusive 10 exclusive 20

//10 before (0-9) 2 10 no.remove from starting and add 10 no. 

//function getRandom(min,max){
//let random1 = Math.floor(Math.random()*(max-min)+min)         // max-min (20-10=10)+10
   return   random1 
}
console.log(getRandom(15,25),"15-24")

//const RANDOM = Math.floor(Math.random()*(max-min)+min)      //10 + 15


//const random3 = Math.floor(Math.random()*6+1)
console.log( random3," random3")


const roundrandom = Math.round((Math.random() - 0.5) * 10); //(1-10,0-9)
console.log( roundrandom," roundrandom")


// const roundrandom = Math.round((Math.random() - 0.5) * 10);// (return no.between 0 to 5 plus and minus)
// console.log( roundrandom," roundrandom")

// const random = Math.random()/5 //
// console.log(random,"random" )


const person={
    age:"21",
   name:"priyanka",
   height:5,
       color:'green'
   }
   console.log(person.age,person.name,person.height)
   
   const {age,height,name,color} = person
   console.log(age,height,name,color,"age")
   
   
   function persondetail({age,height,name,color}){
      console.log(age,height,name,color,"persondetail")
       
   }
   persondetail({ age: 25, height: 6, name: "John", color: "blue" });
   
   