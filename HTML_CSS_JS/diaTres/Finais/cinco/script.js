    let opcao = parseInt(prompt(
      "Escolha uma opção:\n" +
      "1 - Celsius para Fahrenheit\n" +
      "2 - Fahrenheit para Celsius\n" +
      "3 - Celsius para Kelvin"
    ));

    let temperatura = parseFloat(prompt("Digite a temperatura:"));

    let resultado;

    switch(opcao) {

      case 1:
        resultado = (temperatura * 9/5) + 32;
        alert(temperatura + "°C = " + resultado.toFixed(2) + "°F");
        break;

      case 2:
        resultado = (temperatura - 32) * 5/9;
        alert(temperatura + "°F = " + resultado.toFixed(2) + "°C");
        break;

      case 3:
        resultado = temperatura + 273.15;
        alert(temperatura + "°C = " + resultado.toFixed(2) + "K");
        break;

      default:
        alert("Opção inválida!");
    }
