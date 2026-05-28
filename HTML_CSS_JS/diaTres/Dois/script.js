/*2. Verificar número positivo ou negativo
Peça ao usuário para digitar um número e informe se ele é positivo, negativo
ou zero.*/

const checkIsPositiveOrNegative = (a) => {
    if (a < 0) {
        return "Negativo"
    }
    if (a == 0) {
        return "0 é Neutro"
    }
    return "Positivo"
}

let num = Number.parseInt(prompt("Digite um número:"))

alert(checkIsPositiveOrNegative(num))