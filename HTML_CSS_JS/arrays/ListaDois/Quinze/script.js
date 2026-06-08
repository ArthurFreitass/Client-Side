let array = []
let mult = 1
for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
    mult *= array[i]
}

alert("A multiplicação de todos os números é = "+mult)