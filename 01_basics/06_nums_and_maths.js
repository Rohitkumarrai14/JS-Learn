const score=400
console.log(score)

const balance=new Number(100) //another way to represent the number explicitly
console.log(balance)

console.log(balance.toString().length)  //it is converting the number to string and giving the lenght of it 
console.log(balance.toFixed(2)) //give the presion valve till two decimal place 

const othernumber=123.7438
console.log(othernumber.toPrecision(3)) // similar to roundoff 

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) // mark a" ,"between the numbers

//*****************************************MATHS*********************************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.min(4,5,2,9))
console.log(Math.max(4,9,3,10))

console.log(Math.random()) //Math.random value lies always betwwen 0 and 1 
console.log((Math.random()*10)+1) // this will give the minimum value 1 

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)  // this give the random value between range  and the minimum value will we min=10;

