const leftArray = () => {
    const arr = []

    for (let i = 0; i < 5; i++) {
        arr[i] = Number.parseInt(prompt("Digite um número:"))
    }

    let first = arr.shift()
    arr.push(first)

    alert("Array atualizado: " + arr)
}

leftArray()