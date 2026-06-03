let arrayNums = []
let sum = 0

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
    sum += arrayNums[i]
}

alert("A média dos números é:")

for (let i = 0; i < arrayNums.length; i++ ) {
    alert(sum / arrayNums.length)
}