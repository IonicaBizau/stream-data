"use strict";

const streamData = require("../lib")
    , fs = require("fs")
    ;

// Create a read stream
let str = fs.createReadStream(`${__dirname}/input.txt`);

// Pass the stream object and a callback function
streamData(str, (err, data) => {
    console.log(err || data);
});
