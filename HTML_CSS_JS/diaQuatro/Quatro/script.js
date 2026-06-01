const sum = () => {

    let sum = 0
    let i = 1 

    alert("Digite 0 para parar")

    while (i != 0) {
        i = Number.parseFloat(prompt("Digite um número:"))
        sum += i
    }

    alert(sum)
}

sum()