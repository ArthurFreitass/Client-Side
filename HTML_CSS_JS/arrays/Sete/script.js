let arrayNums = []

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("O maior número do array é: ")

let biggestNumber = arrayNums[0]


for (let i = 1; i < arrayNums.length; i++ ) {
    if (arrayNums[i] > biggestNumber) {
        biggestNumber = arrayNums[i]
    }
}

alert("O maior número do array é: " + biggestNumber)
