const list = [];
var mostrarPromedio = false;
var mostrarMediana = false;
var mostrarModa = false;

function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        agregarNumero();
    }
}

function inputsNumber(input) {
    const inputV = document.getElementById(input);
    const inputValue = Number(inputV.value);
    inputV.value = "";
    inputV.focus();
    return inputValue;
}

function agregarNumero() {
    list.push(inputsNumber("inputLista"));
    const parrafoLista = document.getElementById("lista");
    parrafoLista.innerText = "Los elementos agregados son " + list;
    if(mostrarMediana && mostrarModa && mostrarPromedio){
        mediana(list);
        moda(list);
        promedio(list);
    } else if (mostrarMediana && mostrarModa){
        mediana(list);
        moda(list);
    } else if (mostrarMediana && mostrarPromedio){
        mediana(list);
        promedio(list);
    } else if (mostrarModa && mostrarPromedio){
        moda(list);
        promedio(list);
    } else if(mostrarMediana){
        mediana(list);
    } else if(mostrarModa){
        moda(list);
    } else if(mostrarPromedio){
        promedio(list);
    }

}

function promedio(numeros) {
    mostrarPromedio = true;

    let valorAcumulado = 0;

    numeros.forEach(n => valorAcumulado += n);

    valorAcumulado = valorAcumulado / list.length;

    const parrafoMedia = document.getElementById("resultMediaAritmetica");
    parrafoMedia.innerText = "La media Aritmetica es " + valorAcumulado;

}

function esPar(arr) {
    if (arr.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function mediana(numeros) {
    mostrarMediana = true;

    numeros.sort();

    if (esPar(numeros)) {
        let numero1 = numeros.length / 2;
        let numero2 = numero1 - 1;
        let valorMediana = (numeros[numero1] + numeros[numero2]) / 2;
        const parrafoMediana = document.getElementById("resultadoMediana");
        parrafoMediana.innerText = "La mediana es " + valorMediana;
    } else {
        let numero1;
        let valorMediana;
        numero1 = numeros.length / 2;
        valorMediana = parseInt(numero1);
        const parrafoMediana = document.getElementById("resultadoMediana");
        parrafoMediana.innerText = "La mediana es " + numeros[valorMediana];
    }
}


function moda(numeros) {

    mostrarModa = true;

    const lista1Count = {};

    numeros.map(
        a => {
            if (lista1Count[a]) {
                lista1Count[a] += 1;
            } else {
                lista1Count[a] = 1;
            }
        }
    )

    //const lista1Count = {
    //     1: 2,
    //     5: 6,
    //     3: 2,
    //     2: 2
    //};
    //Object.entries(lista1Count) = //const lista1Count = [
    //     [1: 2],
    //     [2: 2],
    //     [3: 2],
    //     [5: 6]
    //];

    const lista1Array = Object.entries(lista1Count).sort((a, b) => {
        return a[1] - b[1];
    });

    const valorModa = lista1Array[lista1Array.length - 1];

    const parrafoModa = document.getElementById("resultadoModa");
    parrafoModa.innerText = "La moda es " + valorModa[0];
}