
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100-descuento;

    const precioDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioDescuento;
}


function onClickButtonPriceDescount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const mostrarPorcentaje = document.getElementById("porcentaje");
    mostrarPorcentaje.innerText = "Descuento %" + discountValue;

    const mostrarPrecio = document.getElementById("precio");
    mostrarPrecio.innerText = "El precio de tu producto es Q" + priceValue;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es Q" + precioConDescuento;

}