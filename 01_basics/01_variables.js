const accountId=144553
let accountEmail="rohit2007@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState; // if valuse is not assigned it will give undefined 

//  accountId=2
// account id can not be chnagebecause it is using (const) keyword 

 accountEmail="hv@hc.com"
 accountPassword="21212121"
 accountCity="varanasi"

console.log(accountId);

// Prefer not to use the (var) because of the Block scope and Functional Scope use insted (let)because if you use var and make change it will change every where 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
