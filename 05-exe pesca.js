const limite = 50
const valordamulta = 4
const pesodepeixes = 56
let excesso =pesodepeixes > limite?pesodepeixes - limite:0
let multa 

multa = excesso * valordamulta
console.log("Excesso", excesso)
console.log ("Multa R$", multa)
