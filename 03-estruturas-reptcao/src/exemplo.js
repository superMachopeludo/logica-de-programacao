import leia from 'readline-sync'

var nota = leia.questionFloat("digite a nota:")
while(nota < 0.0 || nota > 10.0){
    console.log("nota invalida")
    nota = leia.questionFloat("digita a senha novamente: ")
}
console.log("nota invalida")
