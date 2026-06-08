const multi = () => {
    const arr = []

    alert("Entre com o array:")
    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    alert("Entre com um número para multiplicar pelo array:")

    let num = Number(prompt("Digite o número:"))

    let str = ""

    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]} x ${num} = ${arr[i] * num}\n`
    }

    alert("Multiplicação dos elementos:")
    alert(str)
}

multi()