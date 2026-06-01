const decrescente = () => {
    let num = Number.parseInt(prompt("Digite um número"))
    for (let i = 1; i <= num; num--) {
        alert(num)
    }
}

decrescente()