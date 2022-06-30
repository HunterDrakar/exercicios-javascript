const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const pera = {
    value: 8,
}


function mapwithThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);

}

const numbers = [1, 2, 5, 8, 20];

console.log("this -> maçã ", mapwithThis(numbers, maca));

console.log("this -> laranja ", mapwithThis(numbers, laranja));

console.log("this -> pêra ", mapwithThis(numbers, pera));