const biggestNumber = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let big = arr[0]
    let position = 0

    arr.forEach((numArr, index) => {
        if (numArr > big) {
            big = numArr
            position = index
        }
    })

    alert("O maior elemento do array é: " + big + " sua posição é: "+ position)
}

biggestNumber()
