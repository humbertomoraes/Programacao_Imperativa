// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com 
//   seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão);

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

// Desta forma se atribui os valores as variáveis e executa o código, ele percorre as condições e responde apenas o que se encaixar naquela condição

let prato = "Brigadeiro";
let tempoUsuario = 24;

if (prato == "Pipoca" && tempoUsuario > 30) {
    console.log("kabum");
} else if (prato == "Pipoca" && tempoUsuario > 20 && tempoUsuario <= 30) {
    console.log("A comida queimou!!!");
} else if (prato == "Pipoca" && tempoUsuario < 10) {
    console.log("tempo insuficiente");
} else if (prato == "Pipoca" && tempoUsuario >= 10 && tempoUsuario <= 20) {
    console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Macarrão" && tempoUsuario > 24) {
    console.log("kabum");
} else if (prato == "Macarrão" && tempoUsuario > 16 && tempoUsuario <= 24) {
    console.log("A comida queimou!!!");
} else if (prato == "Macarrão" && tempoUsuario < 8) {
    console.log("tempo insuficiente");
} else if (prato == "Macarrão" && tempoUsuario >= 8 && tempoUsuario <= 16) {
    console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Carne" && tempoUsuario > 45) {
    console.log("kabum");
} else if (prato == "Carne" && tempoUsuario > 30 && tempoUsuario <= 45) {
    console.log("A comida queimou!!!");
} else if (prato == "Carne" && tempoUsuario < 15) {
    console.log("tempo insuficiente");
} else if (prato == "Carne" && tempoUsuario >= 15 && tempoUsuario <= 30) {
    console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Feijão" && tempoUsuario > 36) {
    console.log("kabum");
} else if (prato == "Feijão" && tempoUsuario > 24 && tempoUsuario <= 36) {
    console.log("A comida queimou!!!");
} else if (prato == "Feijão" && tempoUsuario < 12) {
    console.log("tempo insuficiente");
} else if (prato == "Feijão" && tempoUsuario >= 12 && tempoUsuario <= 24) {
    console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Brigadeiro" && tempoUsuario > 24) {
    console.log("kabum");
} else if (prato == "Brigadeiro" && tempoUsuario > 16 && tempoUsuario <= 24) {
    console.log("A comida queimou!!!");
} else if (prato == "Brigadeiro" && tempoUsuario < 8) {
    console.log("tempo insuficiente");
} else if (prato == "Brigadeiro" && tempoUsuario >= 8 && tempoUsuario <= 16) {
    console.log("Prato pronto, bom apetite!!!");
} else if (prato != "Macarrão" && prato != "Pipoca" && prato != "Carne" && prato != "Feijão" && prato != "Brigadeiro") {
    console.log("Prato inexistente");
} else {
    console.log("erro no código");
}
