let teste = (["Humberto", "João", "José"])

// A) Acessar elementos específicos de um array.
console.log(teste[2])


// B) Modificar cada um dos elementos de um array e imprimi-los no console.
let teste2 = teste.join()   // primeiro modificar o array por string usando o JOIN
console.log(teste2.replace("Humberto", "Augusto"))  // replace para alterar os elementos
console.log(teste2.replace("João", "Rodrigo"))
console.log(teste2.replace("José", "Cesar"))
console.log(teste2)

// C) Adicionar elementos a um array.
console.log(teste.push("Maria", "Ana"))         // PUSH adiciona elemento ao final do array
console.log(teste.unshift("Joaquim", "Joana"))  // unshift adiciona elemento no início do array
console.log(teste)

// D) Extrair elementos de um array.
console.log(teste.pop())    // POP elimina o último elemento
console.log(teste.shift())  // elimina o primeiro elemento
console.log(teste)

// E) Comparar elementos de um array com os elementos de outro. 
// ???????????????


// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

let numbers = [22, 33, 54, 66, 72]
console.log(numbers[numbers.length])  // retorna a quantidade de elementos, porém há um erro na síntaxe com o numbers antes do []

let grupoDeAmigos = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]]
console.log(grupoDeAmigos[1][0])    // retorna do segundo array o primeiro elemento 

let str = "uma string qualquer"
let grupoDeAmigos = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])    // do array 2 (3º) trás o último elemento porque tá pedindo do tamanho(length) do array 2 menos -1 posição(ultima)


// 1) Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console 
// (você não precisa inverter o Array).
let numbers = [22, 33, 54, 66, 72]
function imprimirInverso(array) {
    return console.log(array.slice(0).reverse())
}
imprimirInverso(numbers)
console.log(numbers)


// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido. R.) EM AMBOS OS CASOS MUDOU O ARRAY DE ORIGEM
let numbers = [22, 33, 54, 66, 72]
let num2 = numbers.reverse()
console.log(numbers)
console.log(num2)

function inverter(array) {
    return console.log(numbers.reverse())
}
inverter(numbers)
console.log(numbers)


// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
let seq1 = ([1, 2, 3])                // 6
let seq2 = ([10, 3, 10, 4])     // 27
let seq3 = ([-5, 100])             // 95

function somararray(soma) {
    switch (soma.length) {

        case 4:
            return console.log(soma[0] + soma[1] + soma[2] + soma[3])
            break;

        case 3:
            return console.log(soma[0] + soma[1] + soma[2])
            break;

        case 2:
            return console.log(soma[0] + soma[1])
            break;

        default:
            console.log("função para soma de até 4 elementos")
            break;
    }
}
somararray(seq2)


