const countOdd = () => {
    const arr = []
    let count = 0
    
    alert("Entre com o array:")


    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
        if (arr[i] % 2 != 0) {
            count++
        }
    }

    alert("O número de pares do array é: " + count)
}

countOdd()