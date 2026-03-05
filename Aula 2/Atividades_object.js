// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
let aluno = {
    nome: "Diego",
    idade: 28,
    curso: "Desenvolvimento de Sistemas"

}
console.log(aluno.nome);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
let Address = {
    cidade: "Goldenroad",
    Rua: "das oliveiras"
}

Address.endereco = (`Rua: ${Address.Rua}, Bairro: Cristal, Número: 50, Cidade: ${Address.cidade}, País: Jhoto `)
aluno.endereco = Address
console.log(Address.cidade)
console.log(aluno.endereco)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidade = ["Inglês", "Fazendo JavaScript", "Próativo"]
console.log (aluno.habilidade[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [10, 10, 10, 10]
console.log (aluno.nome, aluno.notas)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

let responsavel = {
    nome: "Luana",
    parentesco: "Mãe"
}
    

aluno.resposavel = responsavel
console.log (aluno.responsavel.nome)
responsavel.nome = "Arlene"
console.log (responsavel.nome.nome)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let listaDeAlunos = [aluno]
Aluno1 = {
    nome : "Lucas",
    idade:  15,
    Curso: "Desenvolvimento de Sistemas"

}
let Aluno2 = {
    nome: "Yasmin",
    idade: 24,
    Curso: "Desenvolvimento de Sistemas"
}

listaDeAlunos.push (Aluno1)
listaDeAlunos.push (Aluno2)

console.log(listaDeAlunos[1])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:

let Aluno3 = {
    Nome3: "Luciana",
    Idade3: 32,
    Nota3: [8, 10, 7]
}
let Aluno4 ={
    Nome4: "Cintia",
    Idade4: "23",
    Nota4: [7, 9, 5]
}
let Aluno5= {
    Nome5: "Gabriel",
    Idade5: "19",
    Nota5: [7, 8, 10]
}
let listaDeAluno2 =  [Aluno3, Aluno4, Aluno5]

console.log (Aluno3.Nome3, Aluno3.Nota3)
console.log (Aluno4.Nome4, Aluno4.Nota4)
console.log (Aluno5.Nome5, Aluno5.Nota5)
console.log("_______________________________");