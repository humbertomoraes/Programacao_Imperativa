function soma(a,b){
    return console.log(a+b)
}
soma(2,5)


function soma3(a,b){
    return (a+b)
}
console.log(soma3(5,5))


function soma2(a,b){
    return (a+b)
}
let resultado = soma2(5,5)
console.log(resultado)


// função concatenar com argumentos/valores imputados nos parâmetros ao chamar a função
function bemVindo(nome, sobrenome){
    return console.log("Olá, " + nome + " " + sobrenome + " seja muito bem vindo!")
}
bemVindo("Humberto", "Moraes")


// função concatenar com argumentos/valores imputados por padrão nos parâmetros/variaveis da função e/ou ao chamar a função
function bemVindo(nome = "Não", sobrenome = "informado"){
    return console.log("Olá, " + nome + " " + sobrenome + " seja muito bem vindo!")
}
bemVindo()
bemVindo("Humberto", "Moraes")




var nome = "Humberto";

function teste3(a,b) {
    var nome1 = a %= b;
    return console.log(nome1);
}

function teste4() {
    let nome2 = "Humberto2";
    return console.log(nome2)
}

teste3(100,60)
teste4()
console.log(nome)
