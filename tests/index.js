const yourId = require("../index");

// use the includePrefix function to generate a key with a prefix
const key = yourId.generate(
  11,
  "my-",
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
);

console.log(key);
