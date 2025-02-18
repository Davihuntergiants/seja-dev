function Pessoa (nome, sobrenome) {
  let pessoa ={
    nome,
    sobrenome
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}
const pessoaA= Pessoa("jose","Fortes")
const pessoaB= Pessoa("João", "Teste")
console.log(pessoaA, pessoaB)
console.log(pessoaA, nomecompleto)


