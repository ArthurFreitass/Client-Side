const biggestNumber = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let big = arr[0]

    arr.forEach((numArr) => {
        if (numArr > big) {
            big = numArr
        }
    })

    alert("O maior elemento do array é: " + big)
}

biggestNumber()