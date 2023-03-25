/**
 * Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodados.
 * Crie um método que dado a quantidade de quilometros e o preço do combustível nos de o valor
 * gasto em reais para realizar este percurso
 */
class Carro{
    marca;
    cor;
    combustivelKmRodados;
    constructor(marca, cor, combustivelKmRodados ){
        this.marca = marca;
        this.cor = cor;
        this.combustivelKmRodados = combustivelKmRodados;
    }

    //metodo
    gastoMedioViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.combustivelKmRodados * precoCombustivel;
    }

}

const uno = new Carro('Fiat', 'Verde', 1/12);
const palio = new Carro('Uno','Azul', 1/13)

console.log(uno.gastoMedioViagem(70,5));
console.log(palio.gastoMedioViagem(60,10));