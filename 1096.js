const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let i = 1
let j = 15

console.log(`I=${i} J=${7}
I=${i} J=${6}
I=${i} J=${5}`)

while(i < 9){

    i += 2

    console.log(`I=${i} J=${7}
I=${i} J=${6}
I=${i} J=${5}`)

}