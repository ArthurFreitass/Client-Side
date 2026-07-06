const input = document.getElementById("input")
const save = document.getElementById("save")
const load = document.getElementById("load")
const span = document.getElementById("span")

save.addEventListener("click", () => {

    if (input.value.trim() == "") {
        alert("Digite alguma cor!")
        return
    }

    input.placeholder = "Digite outra cor!"
    localStorage.setItem("Cor", input.value)

    input.value = ""
})


load.addEventListener("click", () => {
    if (localStorage.getItem("Cor") == null) {
        span.textContent = "Nenhuma cor salva!"
    } else {
        span.textContent = "Sua cor favorita é " + localStorage.getItem("Cor")
    }
})
