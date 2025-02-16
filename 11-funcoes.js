function soma (A,B){
return A+B
}

function subtracao (A,B) {
return A-B
}
function calculadora (tipo) {
  const A =1 
  const B =2
  if (tipo ==="soma") return soma(A,B)
    else if (tipo==="subtracao") return subtracao(A,B)
  }

//const resultado=calculadora("subtracao")
//console.log()

/*faça uma função verificando se o numero é par ou não
*/

function par (num){
const condicao = num%2===0
return condicao
}
/*mostrar os numeros pares de 0 a 100*/
for (let a= 0; a <= 100; a++){ if (par(a)) console.log(a) 
}