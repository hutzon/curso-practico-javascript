const salariosCol = colombia.map(
    function(presona){
        return personalbar.salary;
    }
);


const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);


function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
};

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
    }else{
        const presonaMitad = lista[mitad];
        return presonaMitad;
    }
};