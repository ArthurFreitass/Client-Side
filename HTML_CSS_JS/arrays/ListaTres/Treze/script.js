const sumPairsIndex = () => {
    const arr = []
    let sum = 0

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
        if (i % 2 == 0) {
            sum += arr[i]
        }
    }
    alert("A soma dos elementos nas posições pares é = "+ sum)
}

sumPairsIndex()