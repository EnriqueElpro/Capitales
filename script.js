import { barcelona, roma, paris, londres } from './cuidades.js';
//Obteniedo los enlaces de DOM(DOCUMENT OBJET MODEL)  => REPRESENTACION ESTRUCTURADA DE HTML(TAMBIEN ES COMO UN)
//  query es un consula donde selecciona en lodos los <a>
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
//Agregando un foreich parra recorrer
enlaces.forEach(function (enlace) {
    //addEventListener realiza un click
    enlace.addEventListener('click', function () {
        //Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //Agregar la clase "active" al enlace actual
        this.classList.add('active')
        // Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        //MOSTRAR EL CONTENIDO EN EL DOM
    });

});
//FUNCTION PARA TRAER LA INFORMACION CORRECTA DESDE CUIDADES.JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];
}






















