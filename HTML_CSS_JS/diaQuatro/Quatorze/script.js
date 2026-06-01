const fatorial = () => {
    let i = 1
    let fatorial = 1
    let num = Number.parseInt(prompt("Digite um número:"))

    while (num >= i) {
        fatorial *= i
        i++
    }

    alert("O fatorial de " + num + " é = " + fatorial)
}

fatorial()