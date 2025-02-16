const person = {
  name:"José",
  lastname: "fortes",
  age: 20
}



//object.keys: cria uma array com todas as chaves do objeto
//console.log(Object.keys(person))


//object.values(); cria uma array com todos os valores do objeto
//console.log(Object.values(person))

//object.entries: cria uma array, com uma array de objetos e uma array de valores.
//console.log(Object.entries(person))
//[['name','josé'],['lastname','Fortes'],['age,'20']]

const livros ={
'Livro A': 19.90,
'livro B': 97.90,
'Livro C': 20.00}
const values= Object.values(livros)
const sum = values.reduce((val, acc) => val+acc, 0)
console.log(sum)