// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  //Another way declare the array 
console.log(myArr[1]);

//Array methods

myArr.push(6)  //we can push the value in array 
myArr.push(7)
myArr.pop()    // it will pop the last element in the array

myArr.unshift(9)  //this will add at start of the array and shift the rest of the array that will cause problem if the array is to big 
myArr.shift()     //it will shift the value in the array 

console.log(myArr.includes(9)); // it answer that 9 is present in array or not 
console.log(myArr.indexOf(3));  // it will give the index of 3 

const newArr = myArr.join()    // add all the array into the string 

console.log(myArr);   // it will print array 
console.log( newArr);  // it will print in string 


//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)  // it give the value from the array btw 1 and 3 ,excluding 3 
                                // but it does not affect the array and do not make cahnges in it 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // it give the value from the array btw 1 and 3,including the 3 
console.log("C ", myArr);        // it afect the array and manipulatre it ,remove the splice value from the array
console.log(myn2);