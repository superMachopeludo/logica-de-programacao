import leia from "readline-sync"

var nome = leia.question("informe seu nome")
var salario = leia.questionFloat("informe o salario")
var deps = leia.questionInt("informe qtd dependentes")

if(deps === 0){
    var total = salario + (salario * 1.02)
    console.log(nome + "seu salario é : R$" + total.tofixed(2))
}else if(deps === 1){
    console.log(nome + "seu salario é : R$" + total.tofixed(2))
}else if(deps === 2){
    console.log(nome + "seu salario é : R$" + total.tofixed(2))
}else if(deps === 2){}
    var total = salario + (salario * 1.07){
    console.log(nome + "seu salario é : R$" + total.tofixed(2))
}else if(deps === 3){
var total = salario + (salario * 1.10)
    console.log(nome + "seu salario é : R$" + total.tofixed(2))
}else if(deps === 4){
var total = salario + (salario * 1.15)
}
    console.log(nome + "seu salario é : R$" + total.tofixed(2))











