const checkLetters = (letter) => {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return "É uma vogal"
    }
    return "Não é uma vogal"
}

let letter = prompt("Digite uma letra")

alert(checkLetters(letter))