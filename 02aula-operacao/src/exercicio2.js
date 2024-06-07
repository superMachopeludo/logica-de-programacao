import leia from "readline-sync"

var numero = leia.questionInt("digite um numero entre 0 e 9: ");

var resposta = numero % 2
console.log("n: "+ resposta)

if(resposta === 0){
    console.log("par");

}else if(resposta === 1 ){
    console.log("impar")
}




