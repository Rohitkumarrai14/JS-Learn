const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // array can take any type of data , so it take array inside the array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)   // combine two or more array.this method returns a new array without                                                 // modifying any existing array 
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // anothe way do it using spread operator "..." to combine the different array 
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // if u end in situtaion like this having a multiple array

const real_another_array = another_array.flat(Infinity)   // it can we fixed using "falt" ,Infinity is the depth till which it will solve the array
console.log(real_another_array);     // [1,2,3,4,5,6,7,6,7,4,5]  



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))      // convert the array into hitesh
console.log(Array.from({name: "hitesh"})) // interesting, you have to specify the type of array other wise it return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));