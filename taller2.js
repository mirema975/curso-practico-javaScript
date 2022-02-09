const coupons = [
    "Descuento1",
    "Descuento2",
    "Descuento3"
];

function inputsNumber(input){
    const inputV = document.getElementById(input);
    const inputValue = Number(inputV.value);
    return inputValue;
}

function inputsText(input){
    const inputV = document.getElementById(input);
    const inputValue = inputV.value;
    return inputValue;
}

function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuentoAplicado = (precio * (100 - descuento)) / 100;
    return precioConDescuentoAplicado;
}

function cupones() {

    const precioValue = inputsNumber("inputPrecio");
    const descuentoValue = inputsText("inputDescuento");

    let descuentoCupon;

    if(!coupons.includes(descuentoValue)){
        alert("El cupon ingresado no es valido")
    }else if (descuentoValue === "Descuento1"){
        descuentoCupon = 15;
    }else if (descuentoValue === "Descuento2"){
        descuentoCupon = 20;
    }else if (descuentoValue === "Descuento3"){
        descuentoCupon = 25;
    }

    const total = calcularPrecioConDescuento(precioValue, descuentoCupon);

    const parrafoPrecio = document.getElementById("resultPrice");
    parrafoPrecio.innerText = "El precio final es de $" + total;

}
