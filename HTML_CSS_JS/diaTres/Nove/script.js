function verificarTriangulo(ladoA, ladoB, ladoC) {
    return (ladoA + ladoB > ladoC) && 
           (ladoA + ladoC > ladoB) && 
           (ladoB + ladoC > ladoA);
}

let lado1 = parseFloat(prompt("Digite o primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o segundo lado:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado:"));

if (verificarTriangulo(lado1, lado2, lado3)) {
    console.log("É possível formar um triângulo!");
} else {
    console.log("Não é possível formar um triângulo.");
}
