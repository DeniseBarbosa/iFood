/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
 * de etiqueta e a escolha da condição de pagamento.
 * Utilize os código da tabela a seguir para ler qual a condição de pagmento escolhida e efetuar
 * o cálculo adequado.
 *  Código condição de pagamento:
 * 1- À vista débio, receber 10% de desconto;
 * 2- Á vista no dinheiro ou pix, receber 15% de desconto;
 * 3- Em duas vezes, preço normal de etiqueta sem juros;
 * 4- Acima de duas vezes, preço normal de etiqueta mais nuros de 10%;
 * 
 */

const precoEtiqueta = 100;
const formaDePagamento = 4;
if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaDePagamento ===2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaDePagamento ===3) {
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta *0.1))
}
