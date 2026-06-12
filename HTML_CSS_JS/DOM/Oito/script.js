const button = document.querySelector("button")

const click = () => {
    alert("eODEV")
}

const mouseover = () => {
    button.textContent = 'Clica logo'
}

button.addEventListener('mouseover', function() {
    mouseover()
}) 

button.addEventListener('click', click)