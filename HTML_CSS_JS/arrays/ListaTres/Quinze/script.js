const largest = () => {
    const arr = []

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    arr.sort((a, b) => b - a)

    const secondLargest = arr[1]

    alert("O segundo maior é = " + secondLargest)
}

largest()
