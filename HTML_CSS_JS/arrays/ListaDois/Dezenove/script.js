const arr = []

alert("ENTRE COM OS ELEMENTOS DO PRIMEIRO VETOR")

for (let i = 0; i < 5; i++) {
    arr.push(Number.parseFloat(prompt("Digite um número:")))
}

let arrTwo = []

alert("ENTRE COM OS ELEMENTOS DO SEGUNDO VETOR")

for (let i = 0; i < 5; i++) {
    arrTwo.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("Soma das posições")

for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arrTwo[i]
    alert(`A soma dos elementos dos arrays nas posições [${i}] é = ${sum}`);   
}