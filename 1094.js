const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let testes = lines
let totalCobaias = 0
let primeiraPosicao = Number(testes.shift())
let totalCoelhos = 0
let totalRatos = 0
let totalSapos = 0
let porcentagemCoelhos
let porcentagemRatos
let porcentagemSapos

for(let indice = 0; indice < primeiraPosicao; indice++){

    totalCobaias += parseInt(testes[indice]);

    let ultimaPosicao = testes[indice].length - 1

    switch(testes[indice][ultimaPosicao]) {

        case "C":
    
            totalCoelhos += parseInt(testes[indice])
            break;
    
        case "R":
    
            totalRatos += parseInt(testes[indice])
            break;
    
        case "S":
    
            totalSapos += parseInt(testes[indice])
            break;

    }
    
}
porcentagemCoelhos = ((totalCoelhos * 100) / totalCobaias).toFixed(2)
porcentagemRatos = ((totalRatos * 100) / totalCobaias).toFixed(2)
porcentagemSapos = ((totalSapos * 100) / totalCobaias).toFixed(2)

console.log(`Total: ${totalCobaias} cobaias`)
console.log(`Total de coelhos: ${totalCoelhos}`)
console.log(`Total de ratos: ${totalRatos}`)
console.log(`Total de sapos: ${totalSapos}`)
console.log(`Percentual de coelhos: ${parseFloat(porcentagemCoelhos).toFixed(2)} %`)
console.log(`Percentual de ratos: ${parseFloat(porcentagemRatos).toFixed(2)} %`)
console.log("Percentual de sapos: " + parseFloat(porcentagemSapos).toFixed(2) + " %")