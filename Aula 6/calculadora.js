//Calculadora - Nível I

//2 - Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(num1, num2){
    return (num1 + num2)
    //return console.log(num1 + num2)
}
//adicionar(5,5)


//3 - Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtrair(num1, num2){
    return (num1 - num2)
    //return console.log(num1 - num2)
}
//subtrair(10,5)


// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicar(num1, num2){
    return (num1 * num2)
    //return console.log(num1 - num2)
}
//multiplicar(20,5)


// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function dividir(num1, num2){
    return (num1 / num2)
    //return console.log(num1 / num2)
}
//dividir(20,5)


//Calculadora - Nível II

// 1 - No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual 
//você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
//console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("----------------- testando funções da calculadora em JS -----------------")


// 2 - Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
console.log(adicionar(5,5))
console.log(subtrair(10,5))


// 3 - Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log(multiplicar(20,5))


// 4 - Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log(dividir(100,2))


// 5 - Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
console.log(dividir(100,0))
console.log(dividir(0,5))



// Calculadora - Nível III - Funções Extras
// A partir deste momento, desenvolveremos funções extras para nossa Calculadora, 
// a partir das funções que já criamos e efetuaremos testes após desenvolver cada uma  função.

// 1 - Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por 
//     ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
function quadradoDoNumero(num3){
    return console.log(multiplicar(num3,num3))
}
quadradoDoNumero(5,5)


// 2 - Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function mediaDeTresNumeros(num1,num2,num3){
    let somainicial = num1+num2
    return console.log(adicionar(somainicial,num3)/3)
}
mediaDeTresNumeros(2,3,4)


// 3 - Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e 
// que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
// Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function calculaPorcentagem(num1,num2){
    num2 = dividir(num2,100)   // ou simplesmente num2 = num2/100
    return console.log(multiplicar(num1,num2))
}
calculaPorcentagem(300,15)


// 4 - Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em 
// relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem(num1,num2){
    num1 = multiplicar(num1,100)
    return console.log(dividir(num1,num2))
}
geradorDePorcentagem(2,200)