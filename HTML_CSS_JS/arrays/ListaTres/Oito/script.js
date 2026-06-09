const repeatNums = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let temRepetido = false 

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                temRepetido = true
                break // Para o loop interno se achar um repetido
            }
        }
        if (temRepetido) break // Para o loop externo também
    }

    alert("Existem repetidos no array = " + temRepetido)
}

repeatNums()
