/*1. Verificar maioridade
Crie um programa que leia a idade de uma pessoa e informe se ela é maior de
idade (18 anos ou mais) ou menor de idade (menos de 18 anos).*/

const checkAge = (a) => {
    if (0) {
        return "Idade inválida!"
    }
    if (a < 18) {
        return "Menor de idade"
    }
    return "Maior de idade"
}

let age = Number.parseInt(prompt("Digite sua idade:"))
alert(checkAge(age))