let menu = `--- CARDÁPIO ---

[1] = Refri .......... R$ 4.00
[2] = Hambúrguer ..... R$ 12.00
[3] = Batata Frita ... R$ 8.00
[4] = Pizza .......... R$ 25.00
[5] = Sorvete ........ R$ 6.00
`;


const choiceProduct = (a) => {
    switch (a) {
        case "1":
            return "REFRI 4R$"
        case "2":
            return "HAMBÚRGUER 12R$"
        case "3":
            return "BATATA FRITA 8R$"
        case "4":
            return "PIZZA 25R$"
        case "5":
            return "SORVETE 6R$"
        default:
            return "OPS desculpe não temos isso!"
    }
}

let choice = prompt("ESCOLHA ALGO DO CARDÁPIO:\n" + menu)

alert(choiceProduct(choice))