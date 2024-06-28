import leia from 'readline-sync'

var numeromagico

var opcaojogo = leia.keyInSelect(["pvp", "pve"])
if(opcaojogo === 0){
    var numeromagico = leia.questionInt("digite o numero magico", {
        hideEchoBack: true
    })
}else if(opcaojogo === 1){
    var dificuldade = leia.keyInSelect(["facil", "medio", "dificil"])
    switch(dificuldade){
        case 0:
             numeromagico = parseInt(Math.random() * 10)
             break
        case 1:
            numeromagico = parseInt(Math.random() * 1000)
            break
        case 2:
            numeromagico = parseInt(Math.random() * 1000000)
            break
    }
}

 var tentativas = 0

do{
    var palpite = leia.questionInt("digite um palpite")
    if(palpite > numeromagico){
        console.log("numero e menor")
    }else if(palpite < numeromagico){
        console.log("numero e maior")
    }else {
        console.log("tente novamente")
    }

    tentativas++
}while(palpite !== numeromagico)

console.log("voce demorou" + tentativas + "para acertar o numero")

