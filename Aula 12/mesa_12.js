let alice = ([47, 82, 46])
let bob = ([45, 8, 32])


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
        return console.log("O ganhador foi " + a);
    } else if (notaA < notaB) {
        return console.log("O ganhador foi " + b);
    } else {
        return console.log("Não houve ganhador, deu empate");
    }
}

ganhador(bob, alice)