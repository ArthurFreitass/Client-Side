let arrayNums = []
let countPairs = 0

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("O número de elementos pares do array é de:")

for (let i = 0; i < arrayNums.length; i++ ) {
    if (arrayNums[i] % 2 == 0) {
        countPairs++
    }
}

alert("O número de elementos pares do array é de: " + countPairs)
