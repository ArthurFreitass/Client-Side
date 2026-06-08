const rightArray = () => {
    const arr = []

    for (let i = 0; i < 5; i++) {
        arr[i] = Number.parseInt(prompt("Digite um número:"))
    }

    let last = arr.pop()
    arr.unshift(last)

    alert("Array atualizado: " + arr)
}

rightArray()