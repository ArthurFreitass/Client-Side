const numsOdd = () => {
    let num = 1
    do {
        num = Number.parseInt(prompt("Digite um número: [Um número ímpar para parar]"))
    } while (num % 2 == 0)
}

numsOdd()