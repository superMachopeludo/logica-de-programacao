  import leia from "readline-sync"
  
  var corrida1=leia.questionFloat("valor da primeira corrida:");
  var corrida2=leia.questionFloat("valor da segunda corrida:");
  var corrida3=leia.questionFloat("valor da terceira corrida:");
  var corrida4=leia.questionFloat("valor da quarta corrida:");
  var corrida5=leia.questionFloat("valor da quinta corrida:");
  
  var total = (corrida1 + corrida2 + corrida3 + corrida4 + corrida5)
  var porcentagem= total - (total *0,25);
  
  console.log("valor liquido: R$" + porcentagem)
