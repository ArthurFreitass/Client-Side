const button = document.querySelector("button")

const click = () => {
    alert("Foi pressionado")
}

button.addEventListener('mousedown', function() {
    click()
}) 