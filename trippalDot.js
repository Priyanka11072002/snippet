const arr = [1,2,3,4,5]
 console.log(...arr,"arr")


const providedata={
name3:"p",
 price:1000000
}

let equal = providedata


console.log([{...equal}],"providedata")




function tripalDot(...args){
 console.log(args)
}
 tripalDot(6,7,8)

const obj = [{name:'pihu'}]

const emptyObj = {}
console.log(...obj,emptyObj)