/*8. Aprovação ou reprovado
Crie um programa que leia a nota de um aluno e informe se ele foi
aprovado ou reprovado. O aluno será aprovado se a nota for 7 ou mais,
caso contrário, será reprovado.*/

const approved = (a) => {
    if (a > 7) {
        return "Aprovado"
    }
    return "Reprovado"
}

let num = Number.parseInt(prompt("Digite a sua nota do aluno:"))
alert(approved(num))