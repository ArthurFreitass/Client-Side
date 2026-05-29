let checkMultipleNumber = (a, b) => {
    if (a % b == 0) {
        return "O primeiro número é múltiplo do segundo"
    }
    return "Não são múltiplos entre si"
}


let number1 = Number.parseInt(prompt("Digite um número:"))
let number2 = Number.parseInt(prompt("Digite um segundo número:"))

alert(checkMultipleNumber(number1, number2))