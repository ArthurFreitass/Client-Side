/*1. Ler e mostrar números
● Ler 5 números inteiros e mostrar todos eles na tela, um embaixo do outro.*/


let arrayNums = []

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("Os elementos do array são:")

for (let i = 0; i < arrayNums.length; i++ ) {
    alert("["+i+"] "+arrayNums[i])
}