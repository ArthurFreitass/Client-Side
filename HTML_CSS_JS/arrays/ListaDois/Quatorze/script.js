let array = []

for (let i = 0; i < 5; i++) {
    array.push(Number.parseInt(prompt("Digite um número:")))
}

alert("Copiando os dados para outro array")

let arrayTwo = []
let strArr = ""

for (let i = 0; i < array.length; i++) {
    arrayTwo.push(array[i])
    strArr += (`[${i}] = ${arrayTwo[i]} `)
}

alert("Elementos da cópia do array:")
alert(strArr)