function countPairs(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            count++
        }
    }

    return count
}

console.log(countPairs(100));
