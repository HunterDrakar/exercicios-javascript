function filtraPares(array) {
    return array.filter(callbackpar);
}

function filtraImpares(array){
    return array.filter(callbackimpar);
}


function callbackpar(item) {
    return item % 2 === 0;
}

function callbackimpar(item){
    return item % 2 !== 0;
}

function filtraCompras(array){
    return array.filter(callbackCompras);
}

function callbackCompras(item){
    return item.includes("Mamão");
}


const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaDeCompras = ["Mamão Papaia ", "Mamão Formosa", "Maracuja", "Maçã", "Uva"]


console.log("Numeros pares filtrados:",filtraPares(meuArray));
console.log("Numeros impares filtrados:",filtraPares(meuArray));
console.log("Na sua lista de compras tem o item:", filtraCompras(listaDeCompras));