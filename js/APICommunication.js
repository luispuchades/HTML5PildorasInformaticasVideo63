///*global window */
///*global alert */
/*jslint browser: true, for:true */

//JavaScript Document

/**Curso: HMTL5 - Pildoras Informáticas - API Communication
 * Origin: Capitulo63.html ==> AJAX
 */

// "use strict";

//1. Definición de Objetos y Variables
var zonaDatos;
var botonLeerFichero;

//1.1 Extracción de elementos desde HTML
zonaDatos = document.getElementById("zona-datos");
botonLeerFichero = document.getElementById("boton-leer-fichero");


//2. Definición de Funciones



function mostrarContenido(e) {
    "use strict";

//Publicamos en zonaDatos el contenido del evento generado
// por el objeto creado con el constructor y que se
// ha abierto con open y le pedimos que lo haga en
// formato texto con responseText
    zonaDatos.innerHTML = e.target.responseText;
}

function leerFichero() {
    "use strict";

    var url;
    var solicitud;
// Si el fichero está alojado en la misma ubicación que el documento HTML, no es necesario especificar la ruta.
    url = "js/texto.txt";

// Creamos un objeto "solicitud" con el constructor "new" de XMLHttpRequest();
    solicitud = new XMLHttpRequest();

//Ponemos el objeto a la escucha
    solicitud.addEventListener("load", mostrarContenido, false);

//Abrimos la conexión con un método GET a la dirección url
    solicitud.open("GET", url, true);

//Especificamos la información que vamos a enviar que en este caso es ninguna (null)
    solicitud.send(null);
}


function comenzar() {
    "use strict";

    botonLeerFichero.addEventListener("click", leerFichero, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
