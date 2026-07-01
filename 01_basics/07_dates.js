// Dates  // Date is object type 

let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

// let myCreateDate=new Date(2023,0,23) //Month start from 0 in js 
// let myCreateDate=new Date(2023,0,23,5,3)
// let myCreateDate=new Date("01-14-2023")
let myCreateDate=new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString())  //Mon Jan 23 2023

 let myTimeStamp=Date.now()

 console.log(myTimeStamp)
 console.log(myCreateDate.getTime())
 console.log(Math.floor(Date.now()/1000))

 let newDate= new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)
 console.log(newDate.getDay());

 newDate.toLocalStrinig('default',{   // we can define what we want , we can customize the format 
    weekday:"long",
    timeZone:''
 })
 


