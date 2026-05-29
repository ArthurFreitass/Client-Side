/*3. Maior de dois números
Solicite dois números ao usuário e mostre qual é o maior número.*/


const biggestNumber = (a, b) => {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    }
    return "Os números são iguais"
}

let num1 = Number.parseFloat(prompt("Digite um número:"))
let num2 = Number.parseFloat(prompt("Digite outro número:"))

alert(biggestNumber(num1, num2))