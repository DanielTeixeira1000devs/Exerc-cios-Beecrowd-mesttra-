const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

console.clear()
let [a, b, c] = lines[0].split(" ");

a = Number(parseFloat(a).toFixed(2))
b = Number(parseFloat(b).toFixed(2))
c = Number(parseFloat(c).toFixed(2))

calculoValorDelta = (b ** 2) - (4 * a * c)

if(calculoValorDelta >= 0 && a != 0){

calculoFormulaBhaskaraComMais = ( (b * -1) + Math.sqrt(calculoValorDelta)) / (2 * a)
calculoFormulaBhaskaraComMenos = ( (b * -1) - Math.sqrt(calculoValorDelta)) / (2 * a)

console.log("R1 = "+ Number(calculoFormulaBhaskaraComMais.toFixed(5)))
console.log("R2 = "+ Number(calculoFormulaBhaskaraComMenos.toFixed(5)))

}else {

    console.log("Impossivel calcular")

}