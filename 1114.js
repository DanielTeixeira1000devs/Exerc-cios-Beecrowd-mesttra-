const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let tentativaSenha = lines

for(let indice = 0; indice < tentativaSenha.length; indice++){

    if(tentativaSenha[indice] == 2002){

        console.log("Acesso Permitido")
        break;

    }else{

        console.log("Senha Invalida")

    }

}