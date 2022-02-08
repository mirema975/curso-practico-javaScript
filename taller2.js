function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuentoAplicado = (precio * (100 - descuento)) / 100;
    return precioConDescuentoAplicado;
}

function precioPorcentajeAplicado() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;

    const total = calcularPrecioConDescuento(precio, descuento);
    
    const parrafoPrecio = document.getElementById("resultPrice");
    parrafoPrecio.innerText = "El precio final es de $" + total;
    
    return total;

}