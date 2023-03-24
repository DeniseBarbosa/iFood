
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';


const LitrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = LitrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = LitrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}




