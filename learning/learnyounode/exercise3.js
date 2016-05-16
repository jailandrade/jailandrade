var fs = require('fs');

var buf = fs.readFileSync('exercise2.js');

var str = buf.toString();

console.log( str.split("\n").length );
