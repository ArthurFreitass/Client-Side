const lessNumber = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let lessNumber = arr[0]

    arr.forEach((numArr) => {
        if (numArr < lessNumber) {
            lessNumber = numArr
        }
    })

    alert("O menor elemento do array é: " + lessNumber)
}

lessNumber()