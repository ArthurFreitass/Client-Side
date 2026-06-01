const averageNotes = () => {
    let arr = []
    let sum = 0
    for (let i = 0; i < 5; i++) {
        arr.push(Number.parseFloat(prompt("Digite a: ["+(i + 1)+"] nota do aluno:")))
        sum += arr[i]
    }
    alert(`A nota média do aluno é: ${sum / 5}`)
}

averageNotes()