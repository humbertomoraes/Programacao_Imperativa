let teste = [1, 2, 3, 4]

console.log(teste[2])  // retorna o elemento na posição informada, começando sempre em zero

console.log(teste.length)  // informa a quantidade de elementos dentro do array

teste.push(5, 6)        // adiciona um ou mais elementos ao final do array
console.log(teste)   // mostra o novo array
console.log(teste.length)  // mostra a NOVA quantidade de elementos após o push[]

teste.pop()     // elimina o último elemento do array
console.log(teste)   // mostra o novo array sem o último elemento retirado com o pop()
console.log(teste.pop()) // mostra ou pode ser guardado o último elemento do array
console.log(teste.shift()) // mostra ou pode ser guardado o primeiro elemento do array

teste.shift()     // elimina o primeiro elemento do array
console.log("shift " + teste)   // mostra o novo array sem o primeiro elemento retirado com o shift()
console.log(teste.shift()) // mostra ou pode ser guardado o primeiro elemento do array

teste.unshift(0,1,2,3)     // acrescenta um ou mais elementos no início do array
console.log(teste)   // mostra o novo array unshift()
console.log(teste.unshift(5)) // mostra a quantidade de elementos no novo array se colocar os elementos dentro dos ()

// .join() ou .join("-") transforma os elementos do array em uma string separada por vírgula() ou por ("-")
console.log(teste.join())

console.log(teste.lastIndexOf(5))  // similiar ao indesof() porém procura do final para o começo e trás a posição do elemento no array

console.log(teste.includes(6))  // similiar ao indesof() porém procura o elemento informado e retorna true ou false se encontrar ou não


