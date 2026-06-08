let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
}

let firstElement = array[0]
let crescente = false

for (let i = 1; i < array.length; i++) {
    if (array[i] > firstElement) {
        firstElement = array[i]
        crescente = true
    } else {
        crescente = false
        break
    }
}

alert("O array está crescente: "+ crescente)