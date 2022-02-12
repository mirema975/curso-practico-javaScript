var argentina = [];
let salariosArg = [];
let salariosArgSorted = [];

//Helpers
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        agregarPersona(argentina);
    }
}
function inputsText(input) {
    const inputV = document.getElementById(input);
    const inputValue = inputV.value;
    inputV.value = "";
    inputV.focus();
    return inputValue;
}
function inputsNumber(input) {
    const inputV = document.getElementById(input);
    const inputValue = Number(inputV.value);
    inputV.value = "";
    return inputValue;
}

function agregarPersona(arr) {
    arr.push({
        name: inputsText("inputPersonasNombre"),
        salario: inputsNumber("inputPersonasSalario")
    })
    salariosArg = argentina.map(
        function (a) {
            return a.salario;
        });

    salariosArgSorted = salariosArg.sort((a, b) => a - b);

}

function esPar(a) {
    return (a % 2 === 0);
}
