import leia from "readline-sync"

var nplaca = leia.question("utimo digito da sua placa: ");

if (nplaca == 0 <= 1){
    console.log("não pode rodar segunda");
}else if(nplaca == 2&&3){
    console.log("não pode rodar terça");
}
else if(nplaca == 4 && 5){
    console.log("não pode rodar quarta");
}
else if(nplaca == 6 && 7){
    console.log("não pode rodar quinta");
}
else if (nplaca == 8 && 9){
    console.log("não pode rodar sexta");
}