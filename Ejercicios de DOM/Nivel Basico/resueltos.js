/*
¡Bienvenido al Nivel Básico! 🚀  
Aquí encontrarás ejercicios ideales para familiarizarte con los conceptos básicos del DOM y JavaScript.  
¡Sigue estos ejercicios para dominar lo esencial!
*/
/*
¡Bienvenido a los ejercicios de manipulación del DOM! 🚀
Estos retos están diseñados para ayudarte a practicar y dominar las interacciones básicas con el DOM usando JavaScript.
¡Recuerda probar tus soluciones directamente en una página web y experimentar! 💪
*/

// Ejercicio 1: Cambia el texto de un elemento con id "titulo" por "¡Hola, DOM!".
document.getElementById("titulo").textContent = "¡Hola, DOM!";

// Ejercicio 2: Cambia el color de fondo de un elemento con id "caja" a azul.
document.getElementById("caja").style.backgroundColor = "blue";

// Ejercicio 3: Esconde un elemento con la clase "oculto".
document.querySelector(".oculto").style.display = "none";

// Ejercicio 4: Cambia el contenido de un párrafo con id "mensaje" al hacer clic en él.
document.getElementById("mensaje").addEventListener("click", function() {
    this.textContent = "¡Has hecho clic en el mensaje!";
});

// Ejercicio 5: Cambia el tamaño de fuente de un elemento con id "texto" a 20px.
document.getElementById("texto").style.fontSize = "20px";

// Ejercicio 6: Agrega una clase "activo" a un elemento con id "boton".
document.getElementById("boton").classList.add("activo");

// Ejercicio 7: Cambia la imagen de una etiqueta <img> con id "imagen" por una nueva URL.
document.getElementById("imagen").src = "nueva-imagen.jpg";

// Ejercicio 8: Muestra un mensaje en consola cuando se presiona un botón con id "alerta".
document.getElementById("alerta").addEventListener("click", function() {
    console.log("¡Botón presionado!");
});

// Ejercicio 9: Cambia el color de texto de todos los elementos <li> a rojo.
const listItems = document.querySelectorAll("li");
listItems.forEach(function(item) {
    item.style.color = "red";
});

// Ejercicio 10: Agrega un nuevo elemento <p> al final de un contenedor con id "contenido".
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo.";
document.getElementById("contenido").appendChild(nuevoParrafo);

// Ejercicio 11: Cambia el texto de todos los elementos con clase "enlace" por "Visitado".
const enlaces = document.querySelectorAll(".enlace");
enlaces.forEach(function(enlace) {
    enlace.textContent = "Visitado";
});

// Ejercicio 12: Remueve un elemento con id "borrar".
const elementoABorrar = document.getElementById("borrar");
elementoABorrar.remove();

// Ejercicio 13: Cambia el valor de un campo de texto con id "input" a "Escribe aquí".
document.getElementById("input").value = "Escribe aquí";

// Ejercicio 14: Cambia el borde de un elemento con clase "caja" a 2px sólido negro.
document.querySelector(".caja").style.border = "2px solid black";

// Ejercicio 15: Duplica un elemento con id "duplicar" y añádelo al mismo contenedor.
const elementoOriginal = document.getElementById("duplicar");
const clonElemento = elementoOriginal.cloneNode(true);
elementoOriginal.parentNode.appendChild(clonElemento);

// Ejercicio 16: Cambia el contenido HTML de un elemento con id "html" por <b>Texto en negrita</b>.
document.getElementById("html").innerHTML = "<b>Texto en negrita</b>";

// Ejercicio 17: Muestra una alerta con el contenido de un <p> con id "alertar".
const contenidoParrafo = document.getElementById("alertar").textContent;
alert(contenidoParrafo);

// Ejercicio 18: Deshabilita un botón con id "deshabilitar".
document.getElementById("deshabilitar").disabled = true;

// Ejercicio 19: Agrega un atributo title con el valor "Ejemplo" a un elemento con clase "tooltip".
document.querySelector(".tooltip").setAttribute("title", "Ejemplo");

// Ejercicio 20: Cambia el estilo de cursor de un elemento con id "cursor" a "pointer".
document.getElementById("cursor").style.cursor = "pointer";

// Ejercicio 21: Cambia la opacidad de un elemento con id "transparente" a 0.5.
document.getElementById("transparente").style.opacity = "0.5";

// Ejercicio 22: Agrega un nuevo elemento <li> con texto "Nuevo elemento" a una lista con id "lista".
const nuevoElementoLista = document.createElement("li");
nuevoElementoLista.textContent = "Nuevo elemento";
document.getElementById("lista").appendChild(nuevoElementoLista);

// Ejercicio 23: Cambia el contenido del primer elemento <h1> en la página a "Título Modificado".
document.querySelector("h1").textContent = "Título Modificado";

// Ejercicio 24: Agrega un evento que cambie el color de un botón con id "color" al pasar el mouse.
document.getElementById("color").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// Ejercicio 25: Muestra el número de elementos <div> en consola.
const divs = document.querySelectorAll("div");
console.log(`Número de elementos <div>: ${divs.length}`);
 