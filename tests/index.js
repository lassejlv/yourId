var yourId = require("yourid");

// Generate a new id

console.log(yourId.generate()); // => Random ID

// Custom id length
console.log(yourId.generate(10)); // => Random ID with length 10

// Include a prefix
console.log(yourId.generate("%", 10)); // => %-10 String ID
