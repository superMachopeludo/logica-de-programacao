import leia from "readline-sync"

var valorproduto = leia.questionFloat("informe o valor do produto")

var umReal = leia.questionInt("qtd moedas R$1")
var cinquenta = leia.questionInt("qtd moedas R$0,50")
var vintecinco = leia.questionInt("qtd moedas R$0,25")
var dez = leia.questionInt("qtd moedas R$0,10")
var cinco = leia.questionInt("qtd moedas R$0,05")

var total = (umReal * 1) + (cinquenta * 0.50) + (vintecinco * 0.25) + (dez * 0.10) + (cinco * 0.05)

if (total >= valorproduto){
    console.log("vai na fé")
}else {
    console.log("trabalhe mais")
}







