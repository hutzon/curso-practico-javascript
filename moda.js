const lista1 = [
    1,
    2, 
    3, 
    4, 
    5, 
    6, 
    7, 
    8,
    4,
    2, 
    6, 
    8, 
    4, 
    3,
];

const lista1Count = {};

lista1.map(//map ayuda a recorrer el array
    function(elemento){
        if(lista1Count[elemento]){//si este elemento ya existe se le sumara 1
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        };
        
    }
);


//funcion para ordenar los numeros
//entires le mandamos como argumento un objeto que queremos convertir en array

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);   

const moda = lista1Array[lista1Array.length - 1];
