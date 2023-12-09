const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorX = parseInt(lines[0]);

for(indice = valorX; indice < valorX + 12; indice++){
    if(indice % 2 != 0){
    
        console.log(indice)
        
    }
}