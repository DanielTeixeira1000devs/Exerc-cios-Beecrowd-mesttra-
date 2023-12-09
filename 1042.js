const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valor1, valor2, valor3] = lines[0].split(" ");

valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
valor3 = parseInt(valor3)

if(valor1 < valor2 && valor1 < valor3){
    if(valor2 < valor3){

        console.log(valor1)
        console.log(valor2)
        console.log(valor3)

    }else if(valor3 < valor2){

        console.log(valor1)
        console.log(valor3)
        console.log(valor2)

    }

}else if(valor2 < valor1 && valor2 < valor3){
    if(valor1 < valor3){

        console.log(valor2)
        console.log(valor1)
        console.log(valor3)

    }else if(valor3 < valor1){

        console.log(valor2)
        console.log(valor3)
        console.log(valor1)

    }


}else if(valor3 < valor1 && valor3 < valor2){
    if(valor1 < valor2){

        console.log(valor3)
        console.log(valor1)
        console.log(valor2)

    }else if(valor2 < valor1){

        console.log(valor3)
        console.log(valor2)
        console.log(valor1)

    }


}

console.log("")
console.log(valor1)
console.log(valor2)
console.log(valor3)