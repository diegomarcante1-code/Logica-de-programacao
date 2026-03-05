// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:

let cores = ["Preto", "Branco", "Vermelho", "Azul"]
console.log(cores[0])
console.log(cores[3])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:

cores.push("Cinza")
cores.shift()
console.log (cores, "e possui", cores.length, "elementos")
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let numero = [10, 20, 30, 40, 50]
console.log(numero, numero.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:

let vazio 
let time = ["Milotic", 8, true, vazio, null]

console.log (time, time.length)



console.log("_______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:

let comando1 = ["Togekiss", "número na Pokédex:", 468, "coloração shiny =", true, "e possui level", null]
console.log(comando1)
comando1.pop()
comando1.shift()
console.log(comando1)
comando1.unshift ("Celebi")
comando1.push (55)
console.log(comando1)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – indexOf, includes
// ------------------------------------------------------------
// a) Dado um array de nomes, verifique o índice de um nome específico.
// b) Busque por um nome específico que não existe na lista.

const nomes = ["Ana", "Bruno", "Carolina", "Daniel", "Eduardo"];
console.log(nomes.indexOf("Bruno"))
console.log(nomes.includes("Gabriel"))

// → Seu código aqui:


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – slice, concat
// ------------------------------------------------------------
// a) Dado dois arrays de letras, junte os 2 em um só usando concat() e exiba o resultado.
// b) Use slice para criar uma nova array, contendo somente os elementos entre a 2ª e a 4ª posição
//    do array que você criou usando o concat() e exiba o resultado.

const letras1 = ["a", "b", "c", "d", "e"];
const letras2 = ["f", "g"];

const letras3 = letras1.concat (letras2)
const letras4 = letras3.slice(3,5)

console.log(letras4)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – arrays aninhados (array dentro de array) e     
// ------------------------------------------------------------
// a) Crie um array aninhado, ebixa-o. Acesso elementos internos deste array.
// b) Use flat para achatar o array em um unico nível (os arrays internos se tornam elementos individuais) e exiba-o.

// → Seu código aqui:

let poke = ["Charmander", ["fogo", ["Squirtle", ["agua", ["Bulbasaur", ["grama"]]]]]]
let unir = poke.flat(6)
console.log(unir)

console.log("_______________________________");