let ageRange = (a) => {
    switch (a) {
        case (a < 0):
            return "Idade inválida"
        case (a <= 12): {
            return "Criança"
        }
        case (a >= 13 && a < 18): {
            return "Adolescente"
        }
        case (a >= 18 && a < 60): {
            return "Adulto"
        }
        default:
            return "Idoso"
    }
}