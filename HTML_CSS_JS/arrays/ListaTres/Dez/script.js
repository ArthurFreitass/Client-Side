const sub = () => {
    const arr = []
    alert("Entre com o vetor:")


    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let biggest = arr[0]

    // Maior
    arr.forEach((numArr) => {
        if (numArr > biggest) {
            biggest = numArr
        }
    })

    let lessNumber

    if (biggest != arr[0]) {
        lessNumber = arr[0]
        arr.forEach((nums) => {
            if (nums < lessNumber) {
                lessNumber = nums
            }
        })
        alert(`Maior número = ${biggest}\nMenor número = ${lessNumber}`)

    } else {
        lessNumber = arr[1]
        arr.forEach((nums) => {
            if (nums < lessNumber) {
                lessNumber = nums
            }
        })
        alert(`Maior número = ${biggest}\nMenor número = ${lessNumber}`)
    }

    let saveBig = biggest
    let saveLess = lessNumber

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == biggest) {
            arr[i] = saveLess
        } else if (arr[i] == lessNumber) {
            arr[i] = saveBig
        }
    }
    alert("O novo array atualizado forma: " + arr)
}

sub()