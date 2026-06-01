const menu = `MENU DE OPÇÕES
1 = INICIAR
2 = AJUDA
3 = SAIR`

const repeatMenu = () => {
    let options
    do {
    alert(menu);
        options = Number.parseInt(prompt("Digite um número:"))
    } while (options != 3)
}

repeatMenu()