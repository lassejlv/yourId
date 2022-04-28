## yourId

A simple id generator. Thats fast, easy, and fun to use.

## Whats new?

    - [v1.1.1] (2022-12-2)
        - Added `check update` command. So the package can check for updates.

     - [v1.2.3] (2022-15-2)
        - Added new command `id` to generate a new id, to make it a lot easier.

     - [v1.4.1] (2022-8-4)
        - Added custom keyspace, so you can use your own custom numbers, letters, and symbols.

## Installation

```sh
$ npm install yourid
```

## Usage

```js
var yourId = require("yourid");

// Generate a new id

console.log(
    yourId.generate({
        length: 10, // the length of the random id string
        keyspace: "customkeyspace", // the keyspace to use
        prefix: "yourPrefix", // set a prefix
        includePrefix: true, // you can set it to FALSE or TRUE
    })
); // => Random ID String length 10 & Prefix yourPrefix
```
