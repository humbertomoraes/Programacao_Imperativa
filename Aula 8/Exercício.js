// Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

// Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, 
// imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.

let status2 = "false"

if (status2 == "True"){
    console.log("O valor é True")
}else{
    console.log("O valor é false")
}


// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. 
// Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", 
// ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, 
// imprima "Aprenderei mais tarde".

var linguagem = "javascript";

if (linguagem == "javascript") {
    console.log("Estou aprendendo");
}
else {
    console.log("Aprenderei mais tarde");
}


console.log(linguagem == "javascript"? "Estou aprendendo 2" : "Aprenderei mais tarde 2");

let estacao = "primavera";

switch(estacao){
    case "verão":
    console.log("É verão")
    break;

    case "inverno":
    console.log("É inverno")
    break;

    case "primavera":
    console.log("É primavera")
    break;

    default:
    console.log("É outono")
}