const button = document.querySelector("button")
const p = document.querySelector("p")

let count = 0

window.onload = () => {
    if (localStorage.getItem("Count") == null) {
        return
    } else {
        p.textContent = localStorage.getItem("Count")
    }
}

button.addEventListener("click", () => {
    count++
    p.textContent = count

    localStorage.setItem("Count", count)
})