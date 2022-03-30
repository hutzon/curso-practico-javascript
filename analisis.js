const salariosCol = colombia.map(  //crea un array con los salarios
    function(persona){
        return persona.salary;
    }
);



//array para ordenar 
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);


function esPar(numero){
    return (numero % 2 === 0);// de esta manera se simplifica el if else y retorna true si es par y false si es impar
};

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        // const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        const mediana = (personaMitad1 + personaMitad2)/2;

        return mediana;
    }else{
        const presonaMitad = lista[mitad];
        return presonaMitad;
    }
};

const medianaGeneral = medianaSalarios(salariosColSorted)

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salarioTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salarioTop10);


console.log({
    medianaGeneral,
    medianaTop10,
});