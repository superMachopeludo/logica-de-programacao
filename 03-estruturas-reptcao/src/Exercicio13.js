import leia from 'readline-sync'

var decimal = leia.questionInt("digite um numero")
var binario =""

while(decimal >= 1){
    var result = decimal / 2
    var resto = decimal % 2
    decimal = result
    binario+= resto
}

console.log(binario)
