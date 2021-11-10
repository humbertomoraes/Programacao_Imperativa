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
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"



function microOndas(prato, tempoUsuario){
if ((prato == "Pipoca") && (tempoUsuario > 30)) {
    return console.log("kabum");
} else if (prato == "Pipoca" && tempoUsuario > 20 && tempoUsuario <= 30) {
    return console.log("A comida queimou!!!");
} else if (prato == "Pipoca" && tempoUsuario < 10) {
    return console.log("tempo insuficiente");
} else if (prato == "Pipoca" && tempoUsuario >= 10 && tempoUsuario <= 20) {
    return console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Macarrão" && tempoUsuario > 24) {
    return console.log("kabum");
} else if (prato == "Macarrão" && tempoUsuario > 16 && tempoUsuario <= 24) {
    return console.log("A comida queimou!!!");
} else if (prato == "Macarrão" && tempoUsuario < 8) {
    return console.log("tempo insuficiente");
} else if (prato == "Macarrão" && tempoUsuario >= 8 && tempoUsuario <= 16) {
    return console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Carne" && tempoUsuario > 45) {
    return console.log("kabum");
} else if (prato == "Carne" && tempoUsuario > 30 && tempoUsuario <= 45) {
    return console.log("A comida queimou!!!");
} else if (prato == "Carne" && tempoUsuario < 15) {
    return console.log("tempo insuficiente");
} else if (prato == "Carne" && tempoUsuario >= 15 && tempoUsuario <= 30) {
    return console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Feijão" && tempoUsuario > 36) {
    return console.log("kabum");
} else if (prato == "Feijão" && tempoUsuario > 24 && tempoUsuario <= 36) {
    return console.log("A comida queimou!!!");
} else if (prato == "Feijão" && tempoUsuario < 12) {
    return console.log("tempo insuficiente");
} else if (prato == "Feijão" && tempoUsuario >= 12 && tempoUsuario <= 24) {
    return console.log("Prato pronto, bom apetite!!!");
} else if (prato == "Brigadeiro" && tempoUsuario > 24) {
    return console.log("kabum");
} else if (prato == "Brigadeiro" && tempoUsuario > 16 && tempoUsuario <= 24) {
    return console.log("A comida queimou!!!");
} else if (prato == "Brigadeiro" && tempoUsuario < 8) {
    return console.log("tempo insuficiente");
} else if (prato == "Brigadeiro" && tempoUsuario >= 8 && tempoUsuario <= 16) {
    return console.log("Prato pronto, bom apetite!!!");
} else if (prato != "Macarrão" && prato != "Pipoca" && prato != "Carne" && prato != "Feijão" && prato != "Brigadeiro") {
    return console.log("Prato inexistente");
} else {
    return console.log("erro no código")
}
}

microOndas("Pipocas", 9)
microOndas("Pipoca", 9)
microOndas("Pipoca", 10)
microOndas("Pipoca", 20)
microOndas("Pipoca", 21)
microOndas("Pipoca", 30)
microOndas("Pipoca", 33)

microOndas("Macarrão", 7)
microOndas("Macarrão", 8)
microOndas("Macarrão", 16)
microOndas("Macarrão", 17)
microOndas("Macarrão", 24)
microOndas("Macarrão", 25)

microOndas("Carne", 14)
microOndas("Carne", 15)
microOndas("Carne", 30)
microOndas("Carne", 31)
microOndas("Carne", 45)
microOndas("Carne", 46)

microOndas("Feijão", 11)
microOndas("Feijão", 12)
microOndas("Feijão", 24)
microOndas("Feijão", 25)
microOndas("Feijão", 36)
microOndas("Feijão", 37)

microOndas("Brigadeiro", 7)
microOndas("Brigadeiro", 8)
microOndas("Brigadeiro", 16)
microOndas("Brigadeiro", 17)
microOndas("Brigadeiro", 24)
microOndas("Brigadeiro", 25)
