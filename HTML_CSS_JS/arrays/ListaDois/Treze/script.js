let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
}

alert("ENTRE COM UM NÚMERO PARA CHECAR QUANTAS VEZES ELE APARECE NO ARRAY")

let numUser = Number.parseInt(prompt("Digite um número:"))
let count = 0

for (let i = 0; i < array.length; i++) {
    if (numUser == array[i]) {
        count++
    }
}

alert("O número aparece cerca de = "+ count +" vezes")