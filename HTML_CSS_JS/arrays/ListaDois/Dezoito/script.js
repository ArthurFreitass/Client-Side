let array = []
let sum = 0
for (let i = 0; i < 5; i++) {
    array.push(Number.parseFloat(prompt("Digite um número:")))
    sum += array[i]
}

let average = sum / array.length

alert("Os números acima da média são:")

for (let i = 0; i < array.length; i++) {
    if (array[i] > average) {
        alert(array[i])
    }
}