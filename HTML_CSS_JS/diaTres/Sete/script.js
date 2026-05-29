/*7. Verificar par ou ímpar
Solicite ao usuário um número inteiro e mostre se ele é par ou ímpar.*/

let x = Number.parseInt(prompt("Digite um número:"))

const pairOrOdd = (a) => {
    if (x % 2 == 0) {
        return "Par"
    }
    return "Ímpar"
}

alert(pairOrOdd(x))