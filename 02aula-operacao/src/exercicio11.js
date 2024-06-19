import leia from "readline-sync"

var timeA = leia.questionInt("informe qtd gols time A")
var timeB = leia.questionInt("informe qtd gols time B")

var diferenca = Math.abs(timeA - timeB)
    
switch(diferenca){
    case 0:
        console.log("empate")
    break
case 1:
case 2:
case 3:
    console.log("jogo normal")
break
default:
    console.log("goleada")
}





