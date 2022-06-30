const alunos = [
    {
        nome: 'Lucas',
        nota: 7,
        turma: '2F',
    },

    {
        nome: 'Rodrigo',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Paula',
        nota: 9,
        turma: '3A',
    },

    {
        nome: 'Guilherme',
        nota: 3,
        turma: '2A',
    },

    {
        nome: 'Wanderley',
        nota: 2,
        turma: '1C'
    },

    {
        nome: 'Vinicius',
        nota: 4,
        turma: '2F',
    },

];



function alunosAprovados(array, media){

    let aprovados = [];
    let reprovados = [];

    for(i = 0; i < array.length; i++){

        // Object Destructing
        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }

        else{
            reprovados.push(nome);
        }
    }

    return `Os alunos aprovados foram ${aprovados} \nOs alunos reprovados foram ${reprovados}`;
}

console.log(alunosAprovados(alunos, 5));