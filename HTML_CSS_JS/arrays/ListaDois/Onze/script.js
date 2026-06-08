let arrayNums = []

for (let i = 0; i < 5; i++) {
    arrayNums.push(Number.parseFloat(prompt("Digite um número:")))
}

alert("Os valores na ordem inversa são: "+ arrayNums.reverse())