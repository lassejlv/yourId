## yourId

A simple id generator. You can easy add to your project.

## Whats new?

    - [v1.1.1] (2022-12-2)
        - Added `check update` command. So the package can check for updates.

     - [v1.2.3] (2022-15-2)
        - Added new command `id` to generate a new id, to make it a lot easier.

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
        prefix: "yourPrefix", // set a prefix
        includePrefix: true, // you can set it to FALSE or TRUE
    })
); // => Random ID String length 10 & Prefix yourPrefix
```
