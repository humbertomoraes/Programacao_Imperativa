let listaCompras = ["arroz", "feijão", "carne", "leite"]

console.log("console log mostra os elementos constante no array: " + listaCompras)

console.log("JOIN() transformar o array em string separada por vírgula " +listaCompras.join()) 

console.log("JOIN(' ') transformar o array em string separada por ESPAÇO " +listaCompras.join(" ")) 

console.log("POP() elimina o ultimo elemento do array que é o : " +listaCompras.pop())
console.log("mostra o novo array após excluir o ultimo elemento com o POP() " + listaCompras)

console.log("PUSH inclui um novo elemento no final do array e mostra a quantidade de elementos nova: " +listaCompras.push("laranja", "batata", "cebola"))
console.log("mostrar os novos elementos do array após incluir elementos ao final com o PUSH " + listaCompras)

console.log("SHIFT() elimina o primeiro elemento do array que é o: " + listaCompras.shift())
console.log("mostrar os novos elementos do array após eliminar o 1º elemento com o shift " + listaCompras)

console.log("UNSHIFT() acrescenta elemento(s) ao início do array e mostra a quantidade de elementos nova: " + listaCompras.unshift("macarrão", "açucar"))
console.log("mostrar os novos elementos do array após acrescentar elementos com o unshift " + listaCompras)


let num = [1, 2, 3]


console.log(num.join("+"))

function somar(num){
    return console.log(num[0]+num[1]+num[2])
}

somar(num)