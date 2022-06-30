function calculaIdade(anos){
    return `Daqui ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`;
};

const pessoa1 = {
    nome: 'Maria',
    idade: 30
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26
};

const animal = {
    nome: 'Snoopy',
    idade: 2,
    raca: 'Lhasa',
};


console.log(calculaIdade.apply(animal, [7])); //Utilizar []
console.log(calculaIdade.call(animal, 30)); // utilizar ,