const countPositive = () => {
    let count = 1;
    let sumCount = 0;
    while (count != 0) {
        count = Number.parseInt(prompt("Digite um número positivo e zero para parar:"))
        if (count > 0) {
            sumCount++
        }
    }
    alert("A soma dos números positivos foi de: "+ sumCount)
}

countPositive()