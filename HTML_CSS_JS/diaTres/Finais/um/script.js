const simpleCalculator = (a, b, c) => {
    switch (c) {
        case 1:
            return a + b
        case 2:
            return a - b;
        case 3:
            return a * b
        case 4:
            if (b == 0) {
                return "Divisão por zero"
            }
            return a / b;
    }
}


let num1 = Number.parseFloat(prompt("Digite um número:"))
let num2 = Number.parseFloat(prompt("Digite um segundo número:"))
let operation = Number.parseInt(prompt("ESCOLHA ALGUMA OPERAÇÃO: (1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão):"))

alert(simpleCalculator(num1, num2, operation))