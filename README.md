## yourId

A simple id generator. You can use it to small projects.

## Whats new?

    - [v1.1.1] (2022-12-2)
        - Added `check update` command. So the package can check for updates.

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
console.log(yourId.generate("%", 10)); // => %-Random ID with length 10
```
