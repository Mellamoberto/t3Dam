'use strict';
//codigo de alumno: Alberto Palomo
//fecha: 26 abril 2023


// variable que uso para pintar los saludos
var colorfuente = "white";

// defino un array con colores, tipo constante
const colores = [];
colores[0] = "green";
colores[1] = "brown";
colores[2] = "blue";
colores[3] = "beige";
colores[4] = "magenta";

// mas formas de declarar e inicializar un array
// preferible la forma colores 3 o 4
const colores2 = ["green", "brown", "blue", "beige", "magenta"];

const colores3 = new Array("green", "brown", "blue", "beige", "magenta");

const colores4 = new Array(4);
colores4[0] = "green";
colores4[1] = "brown";
colores4[2] = "blue";
colores4[3] = "beige";
colores4.push = "magenta";

//funcion que sirve para mostrar un mensaje en un elemento
function saludar(identificador) {
    let elem = document.getElementById(identificador);
    elem.style.color = colorfuente;
    elem.innerHTML = "HoLa";
    colorfuente = getComputedStyle(elem).backgroundColor;
}

function pintar() {
    //Pa elegir elementos a pintar y colores

    for (let x = 1; x <= colores.length; x++) {
        let ident = "c" + x;
        let cf = colores[x - 1];
        rellenar(ident, cf);
    }
}

function rellenar(identificador, colorfondo) {
    // Pa pintar un cuadrito
    let elem = document.getElementById(identificador);
    elem.style.backgroundColor = colorfondo;
}

pintar();