function calculateIMC(kg, m) {
    let imc = kg / Math.pow(m, 2.0)
    return Math.round(imc * 100) / 100
}

console.log("Seu IMC é de: "+ calculateIMC(73, 1.80));
