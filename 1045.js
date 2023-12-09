const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valor1, valor2, valor3] = lines[0].split(" ");

valor1 = parseFloat(valor1)
valor2 = parseFloat(valor2)
valor3 = parseFloat(valor3)

let ladoA
let ladoB
let ladoC

ordemDecrescente(valor1, valor2, valor3)

function ordemDecrescente(valor1, valor2, valor3){

    if(valor1 >= valor2 && valor1 >= valor3){
        if(valor2 >= valor3){
    
            ladoA = valor1
            ladoB = valor2
            ladoC = valor3
    
        }else if(valor3 >= valor2){
    
            ladoA = valor1
            ladoB = valor3
            ladoC = valor2
    
        }
    
    }else if(valor2 >= valor1 && valor2 >= valor3){
        if(valor1 >= valor3){
    
            ladoA = valor2
            ladoB = valor1
            ladoC = valor3
    
        }else if(valor3 >= valor1){
    
            ladoA = valor2
            ladoB = valor3
            ladoC = valor1
    
        }
    
    
    }else if(valor3 >= valor1 && valor3 >= valor2){
        if(valor1 >= valor2){
    
            ladoA = valor3
            ladoB = valor1
            ladoC = valor2
    
        }else if(valor2 >= valor1){
    
            ladoA = valor3
            ladoB = valor2
            ladoC = valor1
    
        }
    
    
    }

}

if(ladoA >= (ladoB + ladoC)){

    console.log("NAO FORMA TRIANGULO")

}else if((ladoA ** 2) == ((ladoB ** 2) + (ladoC ** 2))){

    console.log("TRIANGULO RETANGULO")

    if(ladoA == ladoB && ladoB == ladoC){

        console.log("TRIANGULO EQUILATERO")

    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){

        console.log("TRIANGULO ISOSCELES")

    }

}else if( ladoA ** 2 > ladoB ** 2 + ladoC ** 2){

    console.log("TRIANGULO OBTUSANGULO")

    if(ladoA == ladoB && ladoB == ladoC){

        console.log("TRIANGULO EQUILATERO")

    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){

        console.log("TRIANGULO ISOSCELES")

    }

}else if(ladoA ** 2 < ladoB ** 2 + ladoC ** 2){

    console.log("TRIANGULO ACUTANGULO")

    if(ladoA == ladoB && ladoB == ladoC){

        console.log("TRIANGULO EQUILATERO")

    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){

        console.log("TRIANGULO ISOSCELES")

    }

}else if(ladoA == ladoB && ladoB == ladoC){

    console.log("TRIANGULO EQUILATERO")

}else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){

    console.log("TRIANGULO ISOSCELES")

}