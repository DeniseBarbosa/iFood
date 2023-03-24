function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

(function () {
    const peso = 66;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();



