/*5. Verificar divisibilidade por 3 e 5
Crie um programa que leia um número e verifique se ele é divisível por 3, por
5 ou por ambos. Exiba a mensagem correspondente.*/

const checkDivisibillity = (a) => {
    if (a % 3 == 0 && a % 5 == 0) {
        return "É divisível por ambos"
    } 
    if (a % 3 == 0) {
        return "É divisível por três"
    }
    if (a % 5 == 0) {
        return "É divisível por três"
    }
    return "Não é divisível por nenhum!"
}

let num = Number.parseInt(prompt("Digite um número:"))

alert(checkDivisibillity(a))