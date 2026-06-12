const button = document.querySelector("button")

const click = () => {
   button.style.backgroundColor = 'red'
   button.style.color = 'yellow'
   button.textContent = "EXPLODI"
   button.style.border = 'none'
   button.style.padding = '5rem'
}

button.addEventListener('click', click)