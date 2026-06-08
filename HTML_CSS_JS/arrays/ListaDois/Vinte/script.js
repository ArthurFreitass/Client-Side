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

alert("VETORES INTERCALADOS FORMAM:")

let str = ""

for (let i = 0; i < arr.length; i++) {
    str +=(`POSIÇÃO A[${i}] e B[${i}] forma [${arr[i]}] | [${arrTwo[i]}]\n`);   
}

alert(str)