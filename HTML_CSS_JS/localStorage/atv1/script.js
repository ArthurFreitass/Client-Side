
const input = document.getElementById("input")
const buttonSave = document.getElementById("save")
const buttonDisplay = document.getElementById("display")
const p = document.getElementById("result")

buttonSave.addEventListener("click", () => {

    let message = input.value;

    if (message.trim() != "") {
        localStorage.setItem("Name", message)
        input.value = ""
    } else {
        alert("Digite algum nome!")
        input.value = ""
        input.focus()
    }
})


buttonDisplay.addEventListener("click", () => {
    if (localStorage.getItem("Name") == null) {
        p.textContent = "Nenhum nome encontrado!"
    }
    else {
        p.textContent = localStorage.getItem("Name")
    }
})