const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [horaInicio, horaFinal] = lines[0].split(" ");

horaInicio = parseInt(horaInicio)
horaFinal = parseInt(horaFinal)
quandoHoraFinalMenorQueHoraInicio = (horaFinal + 24) - horaInicio

if(horaFinal < horaInicio){

    console.log(`O JOGO DUROU ${quandoHoraFinalMenorQueHoraInicio} HORA(S)`)

}else if(horaInicio == horaFinal){

    console.log(`O JOGO DUROU 24 HORA(S)`)

}else{

    console.log(`O JOGO DUROU ${horaFinal - horaInicio} HORA(S)`)

}