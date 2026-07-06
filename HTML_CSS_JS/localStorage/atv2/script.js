const input = document.getElementById("input")
const button = document.getElementById("button")
const buttonLoad = document.getElementById("button-load")
const span = document.getElementById("span")

button.addEventListener("click", () => {

    let age = Number(input.value)

    if (isNaN(age)) {
        alert("Entre com um número de idade válido!")
        input.value = ""
        input.focus()
        return
    }

    localStorage.setItem("Age", input.value)

    input.value = ""
    input.focus()
})

buttonLoad.addEventListener("click", () => {
    if (localStorage.getItem("Age") == null) {
        alert("Nenhuma idade salva")
        return
    }
    span.textContent = "Sua idade é: " + localStorage.getItem("Age") + " anos"
})