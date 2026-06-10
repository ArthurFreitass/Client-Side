function fatorial(num) {
    let fat = 1
    for (let i = 1; i <= num; i++) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5));
