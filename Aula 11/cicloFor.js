let volta = 10
for (let contador = volta; contador >= 1; contador--){
    console.log("Volta número " + contador)
}


// 1) Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
let texto = "Olá mundo!!"
for (let num = 1; num <= 5; num++){
    console.log(texto)
}


// 2) Contando números ímpares
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let impar = 0; impar <= 10; impar++){
    if (num[impar] % num[1] !== 0){
        console.log(num[impar])
    }
}


// 3) Criando a tabuada com FOR
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
let numero = 7
for (let tabuada = 1; tabuada <= 10; tabuada++){
    console.log(numero + " x " + tabuada + " = " + tabuada * numero)
}

// 3) Criando a tabuada com WHILE
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
let tabuada = 7
let numero = 1
while (numero <= 10){
    console.log(tabuada + " x " + numero + " = " + tabuada * numero);
    numero++
}


// 3) Criando a tabuada com DO WHILE
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
let tabuada = 7
let numero = 1
do {
    console.log(tabuada + " x " + numero + " = " + tabuada * numero);
    numero++
}
while (numero <= 10)