## yourId

A simple id generator. You can use it to small projects.

## Installation

```sh
$ npm install yourid
```

## Usage

```js
var yourId = require("yourid");

// Generate a new id

console.log(yourId.generate()); // => Random ID

// Custom id length
console.log(yourId.generate(10)); // => Random ID with length 10

// Include a prefix
console.log(yourId.generate("prefix")); // => prefix-Random ID
```
