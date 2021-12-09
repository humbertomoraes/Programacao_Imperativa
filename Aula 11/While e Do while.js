let numero = []
let contador = 1
while (contador <= 100){
     numero.push(contador)
   contador++
}
console.log(numero)

if (numero[contador] % 2 == 0){
    console.log(numero[])
}




function digitalHouse(numero1, numero2)  {
    
    // A função deve imprimir na tela os números de 1 a 100
    let contador = 1; // iniciei de 1
    let numeros = []; // saida dos numeros de 1 a 100

    // console.log("ANTES DO-WHILE "+ numeros);

    // DO - FAÇA
    // WHILE - ENQUANTO
    do {
        numeros.push(contador); // AÇÃO: SALVAR O NUMERO EM CADA POSICAO DO ARRAY DE RESPOSTA

        contador++; // INCREMENTO
    } while (contador <= 100); // CONDIÇÃO DE PARADA = ATÉ 100
    
    // console.log("DEPOIS DO-WHILE "+ numeros);
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++) { // começa da POSICAO 0 do array
        
        // NÚMERO MULTIPLO => DIVISÃO RESTO = ZERO
        // OPERAÇÃO MOD = %

        if ( numeros[i] % numero1 == 0) {
            // Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
            // você deve exibir a string "Digital" em vez do número.
            numeros[i] = "Digital";
        } else if ( numeros[i] % numero2 == 0) {
            // Se o número a ser impresso for um múltiplo do SEGUNDO parâmetro inserido,
            // você deve exibir a string "House" em vez do número.
            numeros[i] = "House";            
        } 
        // else if (  numeros[i] % numero1 == 0 && numeros[i] % numero2 == 0) {
        //     // Se o número a ser imprimir for um múltiplo de ambos os parâmetros,
        //     // você deve exibir a string "Digital House" em vez do número.
        //     numeros[i] = "Digital House";
        // }
        
    }

    console.log(numeros);

}

digitalHouse();
digitalHouse(1, 2);