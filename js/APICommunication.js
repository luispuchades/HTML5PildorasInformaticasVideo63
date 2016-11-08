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



function mostrar(e) {
    "use strict";

//Publicamos en zonaDatos el contenido del evento generado
// por el objeto creado con el constructor y que se
// ha abierto con open y le pedimos que lo haga en
// formato texto con responseText
    zonaDatos.innerHTML = e.target.responseText;
}

function leer() {
    "use strict";

    var url;
    var solicitud;
// Si el fichero está alojado en la misma ubicación que el documento HTML, no es necesario especificar la ruta.
    url = "../texto.txt";

// Creamos un objeto "solicitud" con el constructor "new" de XMLHttpRequest();
    solicitud = new XMLHttpRequest();

//Ponemos el objeto a la escucha
    solicitud.addEventListener("load", mostrar, false);

//Abrimos la conexión con un método GET a la dirección url
    solicitud.open("GET", url, true);

//Especificamos la información que vamos a enviar que en este caso es ninguna (null)
    solicitu.send(null);
}


function comenzar() {
    "use strict";

botonLeer.addEventListener("click", leer, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
