//1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.
console.log(10+20)

//2) Repita o processo anterior, mas utilizando outro operador.
console.log(3*7)

//3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.
let primeiroNumero = 10
let segundoNumero = 20
let soma = (primeiroNumero + segundoNumero)
console.log(soma)

//4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.
let terceiroNumero = 5
console.log(soma + terceiroNumero)

//5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)
terceiroNumero = "1" +1
console.log(terceiroNumero)
console.log(terceiroNumero + 2)
//Resposta - Ele apresenta 11, mas como string e não como número, para tirar a prova real fiz outro console.log com + 2 e o resultado foi 112


//6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)
terceiroNumero = "olá" + 23
console.log(terceiroNumero)
// Resposta - novamente tranformou de tipo de dados número para uma string


//7) Crie mensagens concatenadas com valores diferentes.
console.log("meu nome" + " " + "não é " + "Jony")



// Exercício:
// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:

// Nome
// Sobrenome
// Idade
// Peso (KG)
// Altura
// Plano
// José
// da Silva
// 27
// 83.5
// 1.70
// Ouro
// Carlos
// de Souza
// 28
// 80.1
// 1.76
// Diamante
// Aline
// Ferreira
// 33
// 63.7
// 1.53
// Não Possui
// Ana
// Paula
// 26
// 55.0
// 1.62
// Prata


// Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?
// R.: 
// Nome - string
// Sobrenome - string
// Idade - number
// Peso (KG) - number
// Altura - number
// Plano - string e pode armazenar null
// IMC - constante

// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

// Você deverá criar 6 variáveis:
// Nome
// Idade
// Peso
// Altura
// Plano (só nos interessa saber se TEM ou NÃO TEM)
// Índice de Massa Corporal (IMC)
// O programa deverá apresentar em tela o valor do IMC de um paciente da tabela com uma mensagem. 
//Por exemplo: “Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.

let nome = "Ana Paula"
let idade = 26
let peso = 55.0
let altura = 1.62
let plano = true || false;
const imc = (peso / (altura*altura)).toFixed(2)

console.log(nome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc)