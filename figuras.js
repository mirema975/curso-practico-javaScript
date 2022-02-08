//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es " + perimetroCuadrado + "cm2");
// console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es " + perimetroTriangulo + "cm2");

console.groupEnd();
//Codigo del circulo
console.group("Circulo");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es de " + diametroCirculo + "cm");

// PI
const pi = Math.PI;
console.log("Pi es " + pi);

// Circunferencia

// const perimetroCirculoArrow = (radio) => diametroCirculo(radio) * pi;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
// const perimetroCirculo = diametroCirculo * pi;
// console.log("El perimetro del circulo es de " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio){
    return (radio * radio) * pi;
}
// const areaCirculo = radioCirculo * radioCirculo * pi;
// console.log("El area del circulo es " + areaCirculo + "cm2");

console.groupEnd();
