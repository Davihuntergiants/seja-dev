const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
//forEach = passa por todos elementos da array, somente usado em array
array.forEach ((elemento, posicao ) => {
 // console.log(`${elemento} - posicao ${posicao}`)
})
//find = return elemento
const valor = array.find((elemento) => {
  if ( elemento===10) return true
  return false
})
//console.log(valor)
//findIndex = return posiçao do elemento

const index = array.findIndex((elemento) => {
  if ( elemento===10) return true
  return false})
 // console.log(index)

 //some = recebe true, se pelo menos 1 numero satisfazer a condiçao
 const some = array.some(elemento => elemento>=10)
  //console.log(some)

  //every = return true se todos elementos da array satisfazerem a condição
  const every = array.every (elemento =>  elemento>=10)
    //console.log(every)

    //splice = primeiro parametro é o inicio do corte e o segundo é a quantidade de casas
    const newarray =[1, 2, 3, 4, 5]
   // console.log(newarray.splice(2, 2))
    //map = alterar os valores dentro da array seguindo uma regra
    //console.log(newarray.map ((elemento => { return elemento*2})))
    
   // filter =filtra os elemntos da array
   console.log(newarray.filter((elemento) => {
    return elemento % 2===1
   }))
   console.log(newarray.reduce((acumulado, elemento) => { return acumulado + elemento},0))