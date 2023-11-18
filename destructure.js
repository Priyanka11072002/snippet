
const person={

    name:"rajouri",
    jobtype:"onlinemode",
    familybackground:"well and good",
    desination:"web developer",
   
    address:{
    city:"delhi",
    location:"peeragarhi",
    state:"delhi" 
    }
   
   }
   //this is the way of getting obj.value after destrucuring we will find object value easily
   console.log(person.name,person.jobtype,person.desination,person.address.city,person.address.location)
   //after desturing
   const { jobtype, familybackground, desination,address:{city},address:{state}} = person
   console.log(jobtype, familybackground, desination,city,state,"destrucuring")
   
   const destructure = [{product:"kurti",suplier:"manoj",location:"delhi"},[{review:5}]]
   const [{suplier}]  = destructure;
   const [{ review }] = destructure[1]
   console.log(review)
   console.log(destructure[0].location)
   console.log(destructure[1][0].review)