function mapNoThis(array) {
    return array.map(function(item) {
        return item * 2;
    });
}


const numbers = [2, 4, 6, 8, 10];

console.log(mapNoThis(numbers));

console.log(numbers);