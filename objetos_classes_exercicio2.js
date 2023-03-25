/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso, altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC= peso/(altura * altura))
 * Instacie uma pessoa chamada José que tenha 70Kg de peso e 1.75 de altura e peça ao José
 * para dizer o valor do seu IMC;
 */

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    //metodo
    calcularImc(){
        return this.peso /(this.altura * this.altura);
    }
    classificarPeso(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return'Peso Normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}
const jose = new Pessoa('José', 70, 1.75);
console.log(jose)
console.log(jose.classificarPeso());
const denise = new Pessoa('Denise', 15,1.69)
console.log(denise)
console.log(denise.classificarPeso());