const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let j = 10

console.log(`I=${1} J=${7}
I=${1} J=${6}
I=${1} J=${5}`)

for(let i = 3; i <= 9; i += 2){

    j--

    console.log(`I=${i} J=${j}
I=${i} J=${j - 1}
I=${i} J=${j - 2}`)

j += 3

}