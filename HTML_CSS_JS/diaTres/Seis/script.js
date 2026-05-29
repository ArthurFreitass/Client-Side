/*6. Calculadora simples
Solicite dois números e pergunte ao usuário qual operação ele deseja realizar:
soma, subtração, multiplicação ou divisão. Realize a operação escolhida e
mostre o resultado.*/

const simpleCalc = (a, b, c) => {
    if (c == "+") {
        return a + b
    }
    if (c == "-") {
        return a - b
    }
    if (c == "*") {
        return a * b
    }
    if (c == "/") {
        return a / b
    }
}

let num1 = Number.parseInt(prompt("Digite um número:"))
let num2 = Number.parseInt(prompt("Digite outro número:"))
let operation = prompt("Entre com uma operação: [+][-][*][/]:")

alert(simpleCalc(num1,num2,operation))