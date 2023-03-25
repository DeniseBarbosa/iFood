class RecemNascido {
    nome;
    filhoDe;
    constructor(nome, filhoDe){
        this.nome = nome;
        this.filhoDe = filhoDe;
    }
    registro() {
        console.log(`O nome do bebe é ${this.nome} filho de ${this.filhoDe}`);
    }
}

const recemNascido1 = new RecemNascido('Miguel', 'Paula');


const recemNascido2 = new RecemNascido('Carla', 'Manu');


recemNascido1.registro();
recemNascido2.registro();

