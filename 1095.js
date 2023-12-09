const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let i = 1
let j = 60

console.log(`I=${i} J=${j}`)

while(i < 60 && j > 0){

    i += 3
    j -= 5

    console.log(`I=${i} J=${j}`)

}