const input = document.getElementById("inputNomes")
const button = document.querySelector("button")
const ul = document.querySelector("#names")

const liMessage = []

window.onload = () => {
    if (localStorage.getItem("Nomes") == null) { }
    else {
        const namesSaves = JSON.parse(localStorage.getItem("Nomes"))

        console.log(namesSaves);

        namesSaves.forEach(element => {
            const li = document.createElement("li")
            li.textContent = element
            ul.appendChild(li)
        });
    }
}

button.addEventListener("click", () => {
    if (input.value.trim() == "") {
        alert("Digite um nome!")
    } else {
        liMessage.push(input.value)

        const li = document.createElement("li")
        li.innerText = input.value
        ul.appendChild(li)

        input.value = ""
        localStorage.setItem("Nomes", JSON.stringify(liMessage))
    }
})