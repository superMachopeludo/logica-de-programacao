import leia from "readline-sync"

var salario = leia.questionInt("quanto tu ganha?")
var emprestimo = leia.questionInt(" quanto que tu precisa seu pobre?")
var prestacoes = leia.questionInt("quantos messes princesa?")

var conta = 30 * salario / 100
var empr = emprestimo / prestacoes

if(empr > conta){
    console.log("vai sonhando")
}else{
    console.log("parabens sou seu genio da lampada ")
}






