console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado*4;
} 

// console.log("El périmetro del cuadrado: " + perimetroCuadrado);

function areaCuadrado(lado){
    return lado*lado;
}  
// console.log("Área del cuadrado: " + areaCuadrado);

console.groupEnd();

//Código Triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
} 


console.log("Altura del triangulo: " + alturaTriangulo);


function areaTriangulo(base, altura){
    return (base*altura)/2;
} 
console.groupEnd();


//Código Circulo

console.group("Circulo");

const radioCirculo = 4;
function diametroCirdulo(radio){
    return radio*2;
} 

const piRadio = Math.PI;

function perimetroCriculo(radio){
    return (radio*2)*piRadio;
} 


function areaCirculo(radio){
    return (radio*radio)*piRadio;
} 




// console.log("Radio del Circulo: " + radioCirculo);
// console.log("Périmetro del Circulo: " + perimetroCriculo);
// console.log("Área del Circulo: " + areaCirculo);


console.groupEnd();


//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert(perimetro);
}