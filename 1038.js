const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [codigoLanche, qtdeLanche] = lines[0].split(" ");

codigoLanche = parseInt(codigoLanche)
qtdeLanche = parseInt(qtdeLanche)

const PRECOCACHORROQUENTE = 4.00
const PRECOXSALADA = 4.50
const PRECOXBACON = 5.00
const PRECOTORRADA = 2.00
const PRECOREFRI = 1.50

let valorTotalCachorroQuente = qtdeLanche * PRECOCACHORROQUENTE
let valorTotalXSalada = qtdeLanche * PRECOXSALADA
let valorTotalXBacon = qtdeLanche * PRECOXBACON
let valorTotalTorrada = qtdeLanche * PRECOTORRADA
let valorTotalRefri = qtdeLanche * PRECOREFRI

switch(codigoLanche){
    case 1:
        console.log(`Total: R$ ${valorTotalCachorroQuente.toFixed(2)}`)
            break;
    case 2:
        console.log(`Total: R$ ${valorTotalXSalada.toFixed(2)}`)
            break;
    case 3:
        console.log(`Total: R$ ${valorTotalXBacon.toFixed(2)}`)
            break;
    case 4:
        console.log(`Total: R$ ${valorTotalTorrada.toFixed(2)}`)
            break;
    case 5:
        console.log(`Total: R$ ${valorTotalRefri.toFixed(2)}`)
            break;
}