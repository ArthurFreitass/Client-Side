const areaT = (a, b) => {
    return b * a / 2;
}

let b = Number.parseFloat(prompt("Digite o valor da base do triângulo:"))
let a = Number.parseFloat(prompt("Digite o valor da altura do triângulo:"))

alert(areaT(a,b))