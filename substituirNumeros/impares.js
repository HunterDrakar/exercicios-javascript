function substituiImpares(array){
    try{
        if(!array) throw new ReferenceError("O array não existe!");
        if(!array.length) throw new RangeError("Tamanho do Array Inválido!");


    
        for (let i = 0; i < array.length; i++){
            if (array[i] === 0){
                console.log("Você já é zero!")
            }

            else if(array[i] % 2 === 1){
                console.log(`Substituindo ${array[i]} por 1...`)
                array[i] = 1;
            }

        }

        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log(e.message);
        }

        else if(e instanceof RangeError){
            console.log(e.message);
        }

        else{
            console.log("Ocorreu um erro não esperado" + e)
        }

    }
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
substituiImpares(arr);

console.log(substituiImpares(arr));