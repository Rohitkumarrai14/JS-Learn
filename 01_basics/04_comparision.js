// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)
 
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0) //true
console.log(undefined==0)// in any case its fasle ,>,<.
//the reason is that an equality check == and compirison >,<,>=,<= work differently
//comparison converts null to number,trating it as 0.that's why null>=0 is true and null>0 is false 

//STRICT CHECK (===)
console.log("2"===2)