// O que cada função retorna?
// Neste exercício, você terá que pensar sobre o que cada função retornará, sem executá-la no console.

// Micro Desafio 1
function teste1 (x,y) {
    
    return y - x
}
teste1(10,40)
console.log(teste1(10,40)) // R.: irá retornar número 30


//Micro Desafio 2
function teste2(x, y) {
    return x * 2
    console.log(x)
    return x / 2;
}
teste1(10)
console.log(teste2(10))  // reotrno 20 (10*2) porque só pode haver um return dentro da função??????


// Funções Simples
// 1 - Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function converterPolegadasCentimetos(polegadas){
    return polegadas / 0.3937
}
console.log(converterPolegadasCentimetos(1))


// 2 - Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function transformarURL(endereco){
    return "http://www." + endereco + ".com.br"
}
console.log(transformarURL("humberto"))



// 3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function retorna(frase){    
    return (frase + "!")
}
console.log(retorna("Olá mundo"))


// 4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeCachorro(anos){
    return anos * 7
}
console.log(idadeCachorro(1))


// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.
function valorHT(salario){
    return salario / 160
}
console.log(valorHT(5000))


// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
function imc(peso,altura){
    return peso / Math.pow(altura,2)
}
console.log(imc(77,1.62))
console.log(imc(65,1.62))
console.log(imc(78.74,1.62))


// 7 - Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.
function retornaMaiuscula(texto){
    return texto.toUpperCase()
}
console.log(retornaMaiuscula("humberto"))


// 8 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoDado(dado){
    return typeof(dado)
}
console.log(tipoDado(25))
console.log(tipoDado("Humberto"))
console.log(tipoDado(true))


// 9 - Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function retornaCircunferenciaDoRaio(raio){
    return 2 * Math.PI * raio
}
console.log(retornaCircunferenciaDoRaio(3))

console.log(Math.random())