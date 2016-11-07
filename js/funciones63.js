/*global window */
/*global alert */
/*jslint browser: true, for:true */

//JavaScript Document

/**Curso: HMTL5 - Pildoras Informáticas - API Communication
 * Origin: Capitulo63.html ==> AJAX
 */

// "use strict";

//1. Definición de Objetos y Variables
var zonaDatos;
var botonLeer;

//1.1 Extracción de elementos desde HTML
zonaDatos = document.getElementById("zona-datos");
botonLeer = document.getElementById("boton-leer");


//2. Definición de Funciones

function leer() {
    "use strict";

    var url;
    var solicitud;
// Si el fichero está alojado en la misma ubicación que el documento HTML, no es necesario espedificar la ruta.
    url = "texto.txt";

// Creamos un objeto "solicitud" con el constructor "new" de XMLHttpRequest();
    solicitud = new XMLHttpRequest();


}


function comenzar() {
    "use strict";

botonLeer.addEventListener("click", leer, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
