const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nome1 = (lines[0]);
let nome2 = (lines[1]);
let nome3 = (lines[2]);

if(nome1 == "vertebrado"  && nome2 == "ave"){

    switch(nome3){

    case "carnivoro":

        console.log("aguia")
        break;

    case "onivoro":

        console.log("pomba")
        break;
    }

}else if(nome1 == "vertebrado" && nome2 == "mamifero"){

    switch(nome3){

    case "onivoro":
    
        console.log("homem")
        break;
    
    case "herbivoro":
    
        console.log("vaca")
        break;
    }

}

if(nome1 == "invertebrado"  && nome2 == "inseto"){

    switch(nome3){

    case "hematofago":

        console.log("pulga")
        break;

    case "herbivoro":

        console.log("lagarta")
        break;
    }

}else if(nome1 == "invertebrado" && nome2 == "anelideo"){

    switch(nome3){

    case "hematofago":
    
        console.log("sanguessuga")
        break;
    
    case "onivoro":
    
        console.log("minhoca")
        break;
    }

}