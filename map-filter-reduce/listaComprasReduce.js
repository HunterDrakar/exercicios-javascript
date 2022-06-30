const lista = [
    {
        name: 'Sabao em po',
        price: 30
    },

    {
        name: 'Cereal',
        price: 12,
    },

    {
        name: 'Toalha',
        price: 25,
    },

    {
        name: 'Pao',
        price: 5,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, saldoDisponivel);

}

console.log(calculaSaldo(saldoDisponivel, lista));