let datos;
function verDatosIngresados(a) {

    if (a.length != 0) {

        let personas = "";
        a.forEach(persona => {
            personas = personas.concat(`${persona.name} ${persona.salario}
            `)
        });
        return document.getElementById("labelSalarios")
            .innerText = "Los datos ingresados son: \n" + personas;
    }
}

function mediana(numeros) {

    if (!(numeros.length === 0)) {
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
}

function salariosTop10(numeros) {
    if (!(numeros.length === 0)) {
        let arraySalariosTop10 = numeros.splice((numeros.length * 90) / 100, numeros.length - 1);
        console.log(arraySalariosTop10);
    }

}

