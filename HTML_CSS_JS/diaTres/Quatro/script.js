/*4. Soma positiva ou negativa
Leia um número e informe se a soma desse número com 10 resulta em um
valor positivo ou negativo.*/

const checkSum = (a) => {
    if (a + 10 > 0) {
        return "Resulta em um valor positivo"
    } else if (a + 10 < 0) {
        return "Resulta em um valor negativo"
    }
    return "Zero"
}

let num = Number.parseFloat(prompt("Digite um número:"))
alert(checkSum(num))