const button = document.querySelector("button")

const click = () => {
    alert("Rodou")
}

button.addEventListener('dblclick', function() {
    click()
}) 