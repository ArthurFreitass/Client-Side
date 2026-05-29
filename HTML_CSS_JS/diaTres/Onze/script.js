/*12. Calcular média de duas notas
Leia duas notas de um aluno, calcule a média e diga se está APROVADO,
REPROVADO, RECUPERAÇÃO...
Nota >= 6 Aprovado Nota =
5 Recuperação Nota < 5
Reprovado
Obs: As verificações só poderão ser feitas caso o usuário digite um número
abaixo de 10*/


const calculateAverage = (a, b) => {
    let sum = a + b
    let average = sum / 2.0

    if (average >= 6) {
        return "Aprovado"
    } if (average = 5) {
        return "Recuperação"
    }
    return "Reprovado"
}

let note1 = Number.parseInt(prompt("Digite sua primeira nota:"))
let note2 = Number.parseInt(prompt("Digite sua segunda nota:"))

alert(calculateAverage(note1, note2))