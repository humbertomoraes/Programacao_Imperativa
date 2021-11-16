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

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])  // retorna a quantidade de elementos, porém há um erro na síntaxe com o numbers antes do []

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])    // retorna o primeiro elemento do segundo array

let str = "uma string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])    // Não entendi nada ????????