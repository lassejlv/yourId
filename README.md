## yourId

A simple id generator. You can use it to small projects.

## Installation

```sh
$ npm install your-id
```

## Usage

```js
var yourId = require("your-id");

// Generate a new id

console.log(yourId.generate()); // => Random string

// Custom id length
console.log(yourId.generate(10)); // => Random string with length 10
```
