// Para crear una variable: las variables 
// let solo funcionan dentro de las llaves en las que se han creadotyytyftyfutftf
let variable = 0;
let variable2 = "hola";
let siono = true;
let obj = {calle:"monovar", numero:39};
let arr = ["pepe", "antonio", "luis"];

const HORAS_DIA = 24; //Variable constante

//Si al ejecutar quieres saber que tiene una variable (depurar)
console.log(variable);

//Mensaje de alerta en el navegador (no funciona sin el navegador)
alert("Cuidado")

//Si el tipo de valor es un número, haz lo que sea...
if (typeof(valor)=='number')
{
    //lo que sea
}

//Para concatenar strings, igual que en C#
function devolverDinero() {
    let presupuesto = 0;
    return "Tu presupuesto actual es de " + presupuesto + " €";
}

// Ejemplo de como crear un coche y cambiarle el color (desde fuera)
let opel = new Coche("negro","diesel",120,5);
opel.pintarCoche("fucsia");


//Para crear una clase, lo puedes hacer dentro de cualquier archivo js
class Coche {
    //Aunque no lo ponga, el constructor devuelve this (el objeto)
    constructor (color, motor, cv, plazas){
        this.color = color;
        this.motor = motor;
        this.plazas = plazas;
        if (cv > 60)
        {
            this.cv = cv;
        }
        else {
            this.cv = 60;
        }
        this.gente = [];
    }

    pintarCoche (color) {
        this.color = color
    }
}

// Para poder usar las funciones y las clases fuera de un archivo
export {
    Coche,
    devolverDinero,
    meterGente
}

//Funcion con numero x de parametros:
//el primer parámetro es el coche, a partir de ahí, el resto de parámetros que metamos, se guardará en
//el array rest. Si lo recorremos con el foreach, podremos ir añadiendo cada persona al coche.
function meterGente(coche,...rest) {
    if (rest.length>0 && rest.length<6) {
        rest.forEach(persona => {
            coche.gente.push(persona)
        });
    }
    else {
        console.log("Tienes que meter entre 1 y 5 personas en el coche")
    }
}

//Funciones con fecha
