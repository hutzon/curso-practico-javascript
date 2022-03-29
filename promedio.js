//const lista1 = [100, 200, 400, 600];

function calcularMediaAritmetica(lista) {
//  let sumaLista = 0;

//   for (let i = 0; 1 < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//   }

//otra forma de trabajar de recorrer la lista en lugar del for
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
