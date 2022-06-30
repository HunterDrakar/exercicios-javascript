function comparaNumeros(n1, n2){

    if(!n1 || !n2) return 'Defina dois números!'

    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundafrase(n1, n2);
    const terceiraFrase = criaTerceiraFrase(n1, n2);
    const quartaFrase = criaQuartaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase} \n ${terceiraFrase} \n ${quartaFrase}`;
}

function criaPrimeiraFrase(n1, n2) {
    let saoIguais = '';

    if (n1 !== n2){
        saoIguais = 'não'
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criaSegundafrase(n1, n2){
    const soma = n1 + n2;
    let resultadoDez = 'menor'
    let resultadoVinte = 'menor'
    const comparaDez = soma > 10;
    const comparaVinte = soma > 20;

    if(comparaDez){
        resultadoDez = 'maior';
    }

    if(comparaVinte){
        resultadoVinte = 'maior';
    }

    
    return `Sua soma é ${soma}, que é ${resultadoDez} do que 10 e ${resultadoVinte} que 20.`

}

function criaTerceiraFrase(n1, n2){
    const subtracao = n1 - n2;

    return `A subtração desses números tem como resultado o valor de ${subtracao}.`
}

function criaQuartaFrase(n1, n2){
    const soma = n1 + n2;
    const divisao = soma / 2;
    
    return `A soma de ${n1} e ${n2} dividido por 2 tem como resultado o valor de ${divisao}.`
}


console.log(comparaNumeros(8, 5));


/* Exemplo If ternário:

return saoIguais ? "São Iguais" : "Não são iguais"

*/