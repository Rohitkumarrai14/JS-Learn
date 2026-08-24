// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // thhis semicolon end the code  

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// iife use hota h q ki globle scope ke pollution is problem hoti h
// jo bhi golbal scope ke declaration hai ya vaiable h use htnae ke lye use ktte h 
