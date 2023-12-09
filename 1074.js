const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = [lines];

for(let index = 1; index < lines.length; index++){
    if(parseInt(lines[index]) % 2 == 0 && parseInt(lines[index]) > 0){

        console.log("EVEN POSITIVE")

    }else if(parseInt(lines[index]) % 2 == 0 && parseInt(lines[index]) < 0){

        console.log("EVEN NEGATIVE")

    }else if(parseInt(lines[index]) % 2 != 0 && parseInt(lines[index]) > 0){

        console.log("ODD POSITIVE")
    
    }else if(parseInt(lines[index]) % 2 != 0 && parseInt(lines[index]) < 0){

        console.log("ODD NEGATIVE")
    
    }else if(parseInt(lines[index]) == 0){

        console.log("NULL")
    }
}