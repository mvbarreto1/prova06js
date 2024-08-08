function calcularIMC() {

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value)

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    var imc = peso / (altura * altura);

    document.getElementById('resultado').innerText = 'Seu IMC é: ' + imc.toFixed(2);
}