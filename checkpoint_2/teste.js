//1 - Considere o código abaixo e escolha a alternativa que mostra as saídas corretas. *
//1 ponto


Imagem sem legenda
4 4 3
4 6 3 // resposta
0 6 3
4 3 3
3 1 2


//3 - Dado o array: 

let numeros = [10, 8, 7, 99, 0, 1, 6] //Qual comando devemos executar para que a saída seja: [99, 10, 8, 7, 6, 1, 0] ? *
    //1 ponto
    //console.log(numeros.sort(function(a, b) { return a - b; }));
    //console.log(numeros.sort(function(a, b) { return a * b; }));
console.log(numeros.sort(function(a, b) { return b - a; })); // resposta
//console.log(numeros.sort(function(a, b) { return a, b; }));
//console.log(numeros.sort(function(a, b) { a - b; }));


var z = 0
for (var i = 20; i < 50; i += 10) {
    z += i;
}
console.log(z)


let frutasVermelhas = ["laranja", "limão"]
let frutasAmarelas = ["pera", "maça", "goiaba"]

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase())
let nova = [...frutasVermelhas, ...frutasVermelhas1, ...frutasAmarelas]

//console.log(nova)

//console.log(frutasVermelhas1)

let frutasAmarelas = ["pera", "maça", "goiaba"]
let [fruta2, fruta1, fruta3] = frutasAmarelas
console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(frutasAmarelas)


let x = 5
let y = x++ + ++x

console.log("y=" + y)

x = 3
y = x * (x + 1) * x++
    x = 5
y = 3
y *= x + 1
console.log("x=" + x)
console.log("y=" + y)


for (var i = 0; i < 50; i += 10) {
    console.log(i)
}
console.log(i)


let x = 50
let resto = 50 % 2
resposta = resto == 0 ? 'par' : 'impar'
console.log(resposta)

let valor = 5
let fatorial = 1
for (let i = valor; i <= 5; i++) {
    fatorial += i
}
console.log("Fatorial = " + fatorial)

let valor = 5
let fatorial = 1
for (let i = valor; i <= 5; i++) {
    fatorial *= i
}
console.log("Fatorial = " + fatorial)

let valor = 5
let fatorial = 1
for (let i = 0; i <= 5; i++) {
    fatorial *= i
}
console.log("Fatorial = " + fatorial)


let valor = 5
let fatorial = 1
for (let i = valor; i > 1; i--) {
    fatorial = i
}
console.log("Fatorial = " + fatorial)

let valor = 5
let fatorial = 1
for (let i = valor; i > 1; i--) {
    fatorial *= i
}
console.log("Fatorial = " + fatorial)