import leia from "readline-sync"

var idade = leia.questionInt("informe sua idade")
if(idade < 18){
    var permissao = leia.question("seus pais permitiram a viagem")
if(permissao === "sim")
    var  nome = leia.question("informe seu nome")
    console.log("voce pode viajar tranquilo" + nome)
}else if(permissao === "nao"){
    console.log("nao pode viajar")
    }else{
    console.log("invalida")
}else {
    var nome = leia.question("seu nome")
    console.log("pode viajar" + nome)
}






