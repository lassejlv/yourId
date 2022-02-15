const id = require("../index");

console.log(
    id.generate({
        length: 1,
        prefix: "!",
        includePrefix: true,
    })
);
