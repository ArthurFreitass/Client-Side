let arrayNums = []

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("Os 10 maiores elementos do array são:")

for (let i = 0; i < arrayNums.length; i++ ) {
    if (arrayNums[i] > 10) {
        alert(arrayNums[i])
    }
}