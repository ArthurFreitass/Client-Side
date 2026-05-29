let checkDay = (a) => {
    switch (a) {
        case "1":
            return "Domingo"
        case "2":
            return "Segunda"
        case "3":
            return "Terça"
        case "4":
            return "Quarta"
        case "5":
            return "Quinta"
        case "6":
            return "Sexta"
        case "7":
            return "Sabádo"
            default:
                return "Erro: Número inválido"
    }
}

let day = prompt("Digite um número de [1 a 7]:")

alert(checkDay(day))