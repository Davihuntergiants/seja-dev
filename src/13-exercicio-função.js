function fatorial(n){
  let resposta=1
  while (n>=2) {
    resposta = resposta*n
  n--
}
return resposta
}
const number = 4
const resposta= fatorial(number)
console.log(resposta)
/* n=5
resposta = 5
n=4
resposta=5*4
n=3
resposta =5*4*3
n=2
resposta5*4*3*2
n=1
resposta5*4*3*2*1
n=0*/