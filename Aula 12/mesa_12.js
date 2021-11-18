let alice = [23, 82, 46]
let bob = [45, 8, 32]
let joao = [50, 7, 33]


function ganhador(a, b) {
    let notaA = 0
    let notaB = 0

    for (let contador = 0; contador < a.length; contador++) {
        if (a[contador] > b[contador]) {
            notaA = notaA + 1;
        } else if (a[contador] < b[contador]) {
            notaB = notaB + 1;
        }

    }

    if (notaA > notaB) {
        return console.log("O ganhador foi Alice");
    } else if (notaA < notaB) {
        return console.log("O ganhador foi Bob");
    } else {
        return console.log("Não houve ganhador, deu empate");
    }
}

ganhador(bob, alice)

ganhador(alice, bob)
