// Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Triangulo

// Perimetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Area
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Altura
function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        return altura;
    }
    else{
        alert('por favor ingrese un triangulo isoseles')
    }
}
    
    // Circulo

    // Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }
    
    // PI
    const pi = Math.PI;
    console.log("Pi es " + pi);
    
    // Perimetro
    
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    }
    
    // Area
    function areaCirculo(radio) {
        return (radio * radio) * pi;
    }
    
    
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }
    
    function calcularAreaCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;
        const area = areaCuadrado(value);
        alert(area);
    }
    
    function calcularPerimetroTriangulo(){
        const inputLado1 = document.getElementById("InputLado1");
        const lado1 = Number(inputLado1.value);
        const inputLado2 = document.getElementById("InputLado2");
        const lado2 = Number(inputLado2.value);
        const inputBase = document.getElementById("InputBase");
        const base = Number(inputBase.value);
        const perimetro = perimetroTriangulo(lado1, lado2, base)
        alert(perimetro);
    }
    
    
    function calcularAreaTriangulo(){
        const inputLado1 = document.getElementById("InputLado1");
        const lado1 = Number(inputLado1.value);
        const inputLado2 = document.getElementById("InputLado2");
        const lado2 = Number(inputLado2.value);
        const inputBase = document.getElementById("InputBase");
        const base = Number(inputBase.value);
    const area = (base * altura(lado1, lado2, base)) / 2;
    alert(area);
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputRadio");
    const radio = Number(inputRadio.value);
    const diametro = diametroCirculo(radio);
    alert(diametro);
}
