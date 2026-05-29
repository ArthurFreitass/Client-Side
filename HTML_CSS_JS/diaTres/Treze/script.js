let checkAgeRange = (a) => {
    if (a <= 12) {
        return "Criança"
    }
    else if (a == 13 && a <= 17) {
        return "Adolescente"
    }
    else if (a >= 18 && a <= 59) {
        return "Adulto"
    }
    return "Idoso"
}

let age = Number.parseInt(prompt("Digite sua idade:"))

alert(checkAgeRange(age))