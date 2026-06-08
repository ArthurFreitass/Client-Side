const largest = () => {
    const arr = []

    alert("Entre com o vetor:")

    for (let i = 0; i < 5; i++) {
        arr.push(Number(prompt("Digite um número:")))
    }

    let biggest = arr[0]

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
    } else {
        lessNumber = arr[1]
        arr.forEach((nums) => {
            if (nums < lessNumber) {
                lessNumber = nums
            }
        })
    }

    let secondLargest = lessNumber;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < biggest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    alert("O segundo maior é = " + secondLargest)
}

largest()