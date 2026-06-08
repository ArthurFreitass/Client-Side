const sumPairs = () => {
    const arr = []
    let sum = 0

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
        if (arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }

    alert("Soma dos pares = " + sum)
}

sumPairs()