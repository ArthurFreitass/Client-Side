const button = document.querySelector("button")

const frasesEngracadas = [
  "Erro 404: A motivação não foi encontrada.",
  "Nasci para brilhar, mas esqueci de pagar a conta de luz.",
  "Minha dieta é simples: eu vejo comida, eu como.",
  "Se a vida te der limões, faça uma limonada e cobre R$ 5,00 pelo copo.",
  "Tenho certeza que o meu anjo da guarda tem insônia.",
  "A paciência é uma virtude, mas se eu tiver que esperar, prefiro não ter virtude nenhuma.",
  "Sou uma pessoa maravilhosa. Pena que o mundo não está preparado para tanta maravilha.",
  "A única coisa que cai do céu é chuva. O resto é trabalho ou boleto.",
  "Não sou preguiçoso(a), estou no modo economia de energia.",
  "Eu até tentaria dominar o mundo, mas está muito calor para isso."
];


const click = () => {
    let phrase = Math.floor(Math.random() * 10);
    alert(frasesEngracadas[phrase])
}

button.addEventListener('mouseup', function() {
    click()
}) 