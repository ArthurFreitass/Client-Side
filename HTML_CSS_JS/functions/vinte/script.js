function lessNumber(a, b, c) {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else if (c < a && c < b) {
        return c
    }
    return "Os números são iguais!"
}

console.log(lessNumber(11, 203, 4));
