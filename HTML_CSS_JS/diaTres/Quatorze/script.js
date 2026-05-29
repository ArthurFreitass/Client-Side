const calculateDOrTriple = (a) => {
    if (a % 2 == 0) {
        return a * 2
    }
    return a * 3
}

let num = Number.parseInt(prompt("Digite um número:"))

alert(calculateDOrTriple(num))