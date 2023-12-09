const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valorX, valorY] = lines[0].split(" ");

valorX = parseFloat(valorX).toFixed(1)
valorY = parseFloat(valorY).toFixed(1)

if(valorX == 0 && valorY == 0){

    console.log("Origem")

}else if(valorX > 0 && valorY > 0){

    console.log("Q1")

}else if(valorX < 0 && valorY < 0){

    console.log("Q3")

}else if(valorX > 0 && valorY < 0){

    console.log("Q4")

}else if(valorX < 0 && valorY > 0){

    console.log("Q2")

}else if(valorX == 0 && valorY > 0 || valorX == 0 && valorY < 0){

    console.log("Eixo Y")

}else if(valorX > 0 && valorY == 0 || valorX < 0 && valorY == 0){

    console.log("Eixo X")

}