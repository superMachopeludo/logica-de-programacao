import leia from 'readline-sync'

var lista = [];

var i = 10
while (i > 0){
    lista[i]= leia.question("digite os numeros")
    i--
}console.log(lista)