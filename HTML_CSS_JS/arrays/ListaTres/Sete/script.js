const lessNumber = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let square = []

    arr.forEach((numArr) => {
        square.push(Math.pow(numArr, 2.0))
    })

    alert("O quadrado do arrays forma: " + square)
}

lessNumber()