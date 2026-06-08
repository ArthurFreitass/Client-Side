let arrayNums = []

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("O dobro de cada índice do array é:")

for (let i = 0; i < arrayNums.length; i++ ) {
    alert("["+i+"] "+arrayNums[i] * 2.0)
}