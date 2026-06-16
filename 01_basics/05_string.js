const name="rohit"
const repocount=50

console.log(name+repocount+"value") //old syntax

//modern syntax(backtex syntax )
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


//another method to declare a string
const gameName=new String("rohit")  // In string we can use  numerouse of function and method  

console.log(gameName[0]) //like it give the oth place string "r"
console.log(gameName.__proto__)

console.log(gameName.length) //give the length of string
console.log(gameName.toUpperCase());//convert all the string to the upper case 
console.log(gameName.charAt(2))//give the string at place two 
console.log(gameName.indexOf('t'))//tell position of the string 

const newString =gameName.substring(0,3)
console.log(newString)

const anotherString=gameName.slice(-5,3)
console.log(anotherString)

const newStringOne="  rohit   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://rohit.com%89kdkk"
console.log(url.replace('%89','-'))
console.log(url.includes('httpsC'))

