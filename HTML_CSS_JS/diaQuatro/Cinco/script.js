const correctPassword = () => {
    const password = 1234;

    let tryUser = 1

    do {
        tryUser = Number.parseInt(prompt("Entre com sua senha:"))
    } while(tryUser != password)

    alert("Acesso permitido")
}

correctPassword()