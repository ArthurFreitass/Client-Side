const button = document.querySelector("button")

const click = () => {
    alert("Soltou o mouse")
}

button.addEventListener('mouseup', function() {
    click()
}) 