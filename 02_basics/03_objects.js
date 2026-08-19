// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)// not the correct way to acces the objest 
console.log(JsUser["email"])
console.log(JsUser["full name"])//use square bracket 
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" // this how we channge the vlaue of object 
//Object.freeze(JsUser)     // used to freze the value ...can not be changed again 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());