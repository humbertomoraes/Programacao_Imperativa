let string = "Sou Humberto estudando javascript, string"

// length - retorna ou guarda o número de caracteres de uma string
console.log(string.length)

// indexof - retorna a posição que começa a palavra ou combinação de texto procurada, começando em zero e considera espaço
//           se a palavra ou cominação de texto não for encontrada, é retornado -1
console.log(string.indexOf("Hum"))
console.log(string.indexOf("Humde"))

// slice(inicio, fim) retorna a parte do texto localizada entre os parâmetros solicitados, começando com o o próprio inicio e terminando 1 antes do fim
console.log(string.slice(4,12))

// trim retira espaços em branco antes ou depois de uma string
let textoComEspaco = "     "+string   // inclui espaços antes da variavel string para testar o trim
console.log(textoComEspaco)
console.log(textoComEspaco.trim())

// split() sem parâmetros transforma a string num array(lista) com apenas uma posição, ou com a condição para quebrar em espaços como
//         por exemplo " " e ele quebrará aonde encontrar espaço
console.log(string.split())
console.log(string.split(" "))

// replace serve para alterar alguma parte da string
console.log(string.replace("Humberto", "Augusto"))