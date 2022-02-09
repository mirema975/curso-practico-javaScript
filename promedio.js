const list = [];

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

function agregarNumero(){
    list.push(inputsNumber("inputLista"));
    const parrafoLista = document.getElementById("lista");
    parrafoLista.innerText = "Los elementos agregados son " + list;

}

function mediaAritmetica(){

    let valorAcumulado = 0;

    for(let i = 0; i < list.length; i++){
        valorAcumulado = valorAcumulado + list[i];
    }
    
    valorAcumulado  = valorAcumulado / list.length;

    const parrafoMedia = document.getElementById("resultMediaAritmetica");
    parrafoMedia.innerText = "La media Aritmetica es " + valorAcumulado;

}


