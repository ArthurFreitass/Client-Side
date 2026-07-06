const textarea = document.getElementById("textarea")
const button = document.getElementById("button")
const span = document.getElementById("span")

button.addEventListener("click", () => {
    if (textarea.value.trim() == "") {
        alert("A mensagem não pode ser vazia!")
        return
    }

    localStorage.setItem("MSG", textarea.value)
    span.textContent = textarea.value
    textarea.value = ""
})

window.onload = () => {
    if (localStorage.getItem("MSG") == null) {
        return
    } else {
        span.textContent = localStorage.getItem("MSG")
    }
}
