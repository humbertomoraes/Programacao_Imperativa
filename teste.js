function loopDePares(num, texto) {

    for (let i = 0; i <= 10; i++) {
        novo = num + i
        if (novo % 2 == 0) {
            console.log(novo, texto)
        }
    }
}
loopDePares(04, "é um número par")