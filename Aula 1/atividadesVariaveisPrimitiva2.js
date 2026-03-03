// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

let nome = "Diego"
let idade = "28"
let hobby = "Jogar video game, ver animes e ler. Sim sou um completo nerd!"
let apresentaca2 = `Olá, meu nome é ${nome}, tenho ${idade} anos de idade, e meus hobbies são ${hobby}`

console.log(apresentaca2)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

let cidade = "Jaraguá do sul"
let temp = 23
let frase1 = `Hoje em ${cidade} está fazendo ${temp}°C, perfeito para caminhar ao ar livre!`
console.log (frase1)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.
let um = "Texto"
let dois = 2
let tres = true
let quatro
let cinco = null
let um1 = `Este ${um} é um String`
let dois2 = `Esta varial ${dois} é um Número`
let tres3 = `Se eu disser que esta variavel é boolean então a resposta será ${tres}`
let quatro4 = `Eu não posso deixar a variavel sem valor, pois isso tornará minha variavel ${quatro}`
let cinco5 = `É melhor eu deixar a variavel como ${cinco} assim ela será do tipo null`

console.log (um1)
console.log (dois2)
console.log (tres3)
console.log (quatro4)
console.log (cinco5)
// → Seu código aqui:


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "Itachi Uchiha"
let cidade3 = "Konohagakuri"
let idade2 = 15
let Missao = "Eliminar todo o seu clã"
let historia = `${personagem} foi um garoto que resolveu problemas de adulto. Com ${idade2}, trabalhou como agente duplo para seu Clã
e também para ${cidade3}, mas chegou o tempo onde ele teve que se decidir. Sua missão ${Missao}, aconteceu numa noite
de lua cheia, com uma dor insustentavel em seu peito, ele aniquilou todos os membros do seu clã, pai e mãe
deixando apenas seu irmão Sasuke vivo. Ele assumiu toda a escuridão do mundo e se tornou renegado
para manter a paz dentro da sua aldeia e salvar seu irmão mais novo depositando nele toda sua esperança de um futuro melhor`

console.log(historia)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let di = "Diego"
let mot = "este ano vou ser a melhor versão de mim, viver o momento presente enquanto ainda temos um presente"
let consolidado = `Eu ${di} assumi um compromisso comigo mesmo de que, ${mot}`
console.log(consolidado)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log(`
====================================
         SISTEMA DO USUÁRIO         
====================================
1 - Ver perfil
2 - Editar Perfil
3 - Configurações
4 - Notificações
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema
0 - Sair
====================================
Digite o número da opção desejada
====================================`)

console.log("_______________________________");