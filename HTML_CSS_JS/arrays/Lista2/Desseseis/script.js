let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
}

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        array[i] == 0
    }
}

alert("Vetor com os elementos negativos substituídos por zero!")

for (let i = 0; i < array.length; i++) {
    alert(array[i])
}