function soma(n1, n2){
    const somar = n1 + n2;

    return `A soma de ${n1} e ${n2} é de ${somar}`;
}

function subtracao(n1, n2){
    const sub = n1 - n2;

    return `A subtração de ${n1} e ${n2} é de ${sub}`;
}

function multiplicacao(n1, n2){
    const multi = n1 * n2;

    return `A multiplicação de ${n1} e ${n2} é de ${multi}`;
    
}

function divisao(n1, n2){
    const divisao = n1 / n2;

    return `A divisao de ${n1} e ${n2} é de ${divisao}`;
}


export{
    soma,
    subtracao,
    multiplicacao,
    divisao
};