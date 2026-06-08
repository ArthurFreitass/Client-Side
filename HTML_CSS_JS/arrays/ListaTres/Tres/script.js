const positiveNum = () => {
    const arr = []
    alert("Entre com o vetor:")


    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let str = ""

    arr.forEach((numArr) => {
        if (numArr > 0) {
            str += numArr + "\n"
        }
    })

    alert("Os números positivos são:\n" + str)
}

positiveNum()