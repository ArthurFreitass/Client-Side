const calculateDiscountPrice = (value) => {
    return value - (value * 0.1)
}

let product = Number.parseInt(prompt("Digite o preço de um produto:"))

alert(calculateDiscountPrice(product))