const countNegative = () => {
    let num
    do {
        num = Number.parseInt(prompt("Digite um número: [Negativo para parar]"))
    } while (num >= 0)
}