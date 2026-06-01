const biggest100 = (x) => {
    while (x <= 100) {
        x = Number.parseInt(prompt("Digite um número maior que 100:"))
    }
    alert("Número confirmado")
}

let num = Number.parseInt(prompt("Digite um número maior que 100"))

biggest100(num)