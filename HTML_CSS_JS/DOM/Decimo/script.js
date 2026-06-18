const button = document.querySelector("button")

const click = () => {
    button.textContent = "Modo game"
    button.style.width = '300px'
    button.style.backgroundColor = 'blue'
    button.style.color = '#fff'
    button.style.height = '150px'
    button.style.border = 'none'
}

button.addEventListener('mouseup', function() {
    click()
}) 