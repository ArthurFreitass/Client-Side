/*10. Mensagem de boas-vindas
Crie um programa que leia a idade de uma pessoa e imprima uma mensagem
de boas-vindas. Se a idade for maior ou igual a 18, imprima "Bem-vindo(a)",
caso contrário, imprima "Acesso negado".*/

const checkAge = (a) => {
    if (a < 18) {
        return "Acesso negado"
    }
    return "Bem vindo(a)"
}

let age = Number.parseInt(prompt("Digite sua idade:"))


alert(checkAge(age))