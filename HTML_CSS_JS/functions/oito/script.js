function biggestNumber(a, b) {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    }
    return `Os números são iguais`
}

console.log(biggestNumber(11, 203));
