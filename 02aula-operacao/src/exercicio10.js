import leia from "readline-sync"

console.log("informe o valor da doação")
console.log("1 - 10 reais ")
console.log("2 - 25 reais")
console.log("3 - 50 reais")
console.log("4 - outros valores")

var opcao = leia.question("informe a opção")
if(opcao === "1"){
    console.log("voce doou 10 reais! obrigado")
}else if(opcao === "2"){
    console.log("voce doou 25 reais! obrigado")
}else if(opcao === "3"){
    console.log("voce doou 50 reais! obrigado")
}else if(opcao === "4"){
    var valor = leia.question("informe o valor que vc deseja doar")
    console.log("voce doou R$" + valor +" ! muito obrigado" )
}else{
    console.log("OPCAO INVALIDA")
}





