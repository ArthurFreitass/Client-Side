let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
}

alert("ENTRE COM UM NÚMERO PARA CHECAR SE ELE EXISTE NO ARRAY")

let numUser = Number.parseInt(prompt("Digite um número:"))
let numExists = false

for (let i = 0; i < array.length; i++) {
    if (numUser == array[i]) {
        numExists = true
    }
}

alert("O número existe: "+ numExists)