const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [a, b, c] = lines[0].split(" ");

let areatriangulo = (a * c) / 2
let areaCirculo = (c ** 2) * 3.14159
let areaTrapezio = (parseFloat(a) + parseFloat(b)) * c / 2
let areaQuadrado = b * b
let areaRetangulo = a * b


console.log("TRIANGULO:", areatriangulo.toFixed(3))
console.log("CIRCULO:", areaCirculo.toFixed(3))
console.log("TRAPEZIO:", areaTrapezio.toFixed(3))
console.log("QUADRADO:", areaQuadrado.toFixed(3))
console.log("RETANGULO:", areaRetangulo.toFixed(3))