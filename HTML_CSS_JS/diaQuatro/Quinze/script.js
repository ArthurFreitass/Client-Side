const validRange = () => {
    let num;
    do {
        num = Number.parseInt(prompt("Digite um número: [Entre 1 e 10]"))
    } while (num < 1 || num > 10)
}

validRange()