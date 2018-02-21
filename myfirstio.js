var fs = require('fs')
var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);
var str = buf.toString();
var arr = str.split('\n');
var l = arr.length-1;
console.log(l);


// andere juiste oplossing

var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
