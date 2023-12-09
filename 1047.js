const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [horaInicio, minutoInicio, horaFinal, minutoFinal] = lines[0].split(" ");

horaInicio = parseInt(horaInicio)
minutoInicio = parseInt(minutoInicio)
horaFinal = parseInt(horaFinal)
minutoFinal = parseInt(minutoFinal)

quandoHoraFinalMenorHoraInicial = (horaFinal + 24) - horaInicio
quandoMinutoFinalMenorMinutoInicial = (minutoFinal + 60) - minutoInicio

if(horaFinal > horaInicio && minutoFinal > minutoInicio){1

    console.log(`O JOGO DUROU ${horaFinal - horaInicio} HORA(S) E ${minutoFinal - minutoInicio} MINUTO(S)`)

}else if(horaFinal == horaInicio && minutoFinal == minutoInicio){3

    console.log(`O JOGO DUROU 24 HORA(S) E ${minutoFinal - minutoInicio} MINUTO(S)`)

}else if(horaFinal == horaInicio && minutoFinal > minutoInicio){4

        console.log(`O JOGO DUROU ${horaFinal - horaInicio} HORA(S) E ${minutoFinal - minutoInicio} MINUTO(S)`)

}else if(horaFinal == horaInicio && minutoFinal < minutoInicio){5

    console.log(`O JOGO DUROU 23 HORA(S) E ${(minutoFinal + 60) - minutoInicio} MINUTO(S)`)

}else if(horaFinal > horaInicio && minutoFinal < minutoInicio){6

    console.log(`O JOGO DUROU ${(horaFinal - horaInicio) - 1} HORA(S) E ${(minutoFinal + 60) - minutoInicio} MINUTO(S)`)

}else if (horaFinal < horaInicio && minutoFinal < minutoInicio){2

    console.log(`O JOGO DUROU ${((horaFinal + 24) - horaInicio) - 1} HORA(S) E ${(minutoFinal + 60) - minutoInicio} MINUTO(S)`)

}else if(horaFinal > horaInicio && minutoFinal == minutoInicio){

    console.log(`O JOGO DUROU ${horaFinal - horaInicio} HORA(S) E ${minutoFinal - minutoInicio} MINUTO(S)`)

}else if (horaFinal < horaInicio && minutoFinal == minutoInicio){

    console.log(`O JOGO DUROU ${((horaFinal + 24) - horaInicio)} HORA(S) E ${minutoFinal - minutoInicio} MINUTO(S)`)

}