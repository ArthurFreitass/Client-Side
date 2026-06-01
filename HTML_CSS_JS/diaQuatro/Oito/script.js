const positiveNumber = () => {
    let num = 0;
    do {
        num = Number.parseInt(prompt("Digite um número positivo:"))
    } while (num <= 0)
}

positiveNumber()