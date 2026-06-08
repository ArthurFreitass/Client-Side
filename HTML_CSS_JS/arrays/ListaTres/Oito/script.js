const repeatNums = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let repeatNums = false

    let first = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (first == arr[i]) {
            first = arr[i]
            repeatNums = true
        }
    }

    alert("Existem repetidos no array = " + repeatNums)
}

repeatNums()