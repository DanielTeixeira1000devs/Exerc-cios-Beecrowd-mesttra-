const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let totalIdadeEmDias = parseInt(lines[0]);

let idadeAnos = parseInt(totalIdadeEmDias / 365)
let idadeMeses = parseInt((totalIdadeEmDias % 365) / 30)
let idadeDias = (totalIdadeEmDias % 365) - idadeMeses * 30

console.log(`${idadeAnos} ano(s)
${idadeMeses} mes(es)
${idadeDias} dia(s)`)