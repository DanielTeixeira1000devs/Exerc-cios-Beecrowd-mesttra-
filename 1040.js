const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [nota1, nota2, nota3, nota4] = lines[0].split(" ");
let notaExame = parseFloat(lines[1]);

nota1 = parseFloat(nota1).toFixed(1)
nota2 = parseFloat(nota2).toFixed(1)
nota3 = parseFloat(nota3).toFixed(1)
nota4 = parseFloat(nota4).toFixed(1)

console.log(`Media: ${calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4).toFixed(1)}`)

function calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4){

    return ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10

} if(calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4) >= 7.0){

    console.log("Aluno aprovado.")

}else if(calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4) >= 5.0 && calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4) <= 6.9){

    console.log("Aluno em exame.")
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
        if(mediaAposExameRecuperacao(nota1, nota2, nota3, nota4, notaExame) >= 5.0){

            console.log("Aluno aprovado.")
            console.log(`Media final: ${mediaAposExameRecuperacao(nota1, nota2, nota3, nota4, notaExame).toFixed(1)}`)

        }else if(mediaAposExameRecuperacao(nota1, nota2, nota3, nota4, notaExame) < 5.0){

            console.log("Aluno reprovado.")
            console.log(`Media final: ${mediaAposExameRecuperacao(nota1, nota2, nota3, nota4, notaExame).toFixed(1)}`)

        }

}else if(calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4) < 5){

    console.log("Aluno reprovado.")
}

function mediaAposExameRecuperacao(nota1, nota2, nota3, nota4, notaExame){

    return (calculoMediaPonderadaAluno(nota1, nota2, nota3, nota4) + notaExame) / 2

}