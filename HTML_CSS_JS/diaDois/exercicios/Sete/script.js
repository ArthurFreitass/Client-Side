/*Atividade 7 — Soma de 3 Números
Peça três números ao usuário e mostre a soma total.*/


let nums = []
let sum = 0

for (let i = 0; i < 3; i++) {
    nums.push(Number.parseFloat(window.prompt(`Digite um ${i + 1} número:`)))
    sum += nums[i]
}

window.alert("A soma dos números é: " + sum)
