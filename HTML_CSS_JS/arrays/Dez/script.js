let array = []

for (let i = 0; i < 5; i++) {
    array.push(prompt("Digite um nome: "))
}

alert("Nomes na ordem que foram digitados:")

for (let i = 0; i < array.length; i++ ) {
    alert(array[i])
}