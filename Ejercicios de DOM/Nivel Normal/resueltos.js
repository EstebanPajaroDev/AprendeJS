/*
¡Bienvenido al Nivel Normal! 🚀  
Aquí comenzarás a trabajar con lógica más compleja y manipulación avanzada del DOM.  
¡Sigue estos ejercicios para fortalecer tus habilidades!
*/

// Ejercicio 1: Crear un botón que cambie el color de fondo de un elemento al pasar el ratón sobre él
document.getElementById("elemento").addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
});

// Ejercicio 2: Mostrar y ocultar un div al hacer clic en un botón
document
  .getElementById("mostrarOcultar")
  .addEventListener("click", function () {
    const div = document.getElementById("elemento");
    div.style.display = div.style.display === "none" ? "block" : "none";
  });

// Ejercicio 3: Agregar un evento de teclado para cambiar el color de fondo de la página
document.addEventListener("keydown", function (event) {
  if (event.key === "r") {
    document.body.style.backgroundColor = "red";
  }
});

// Ejercicio 4: Crear una función que añada un nuevo item a una lista al hacer clic en un botón
document.getElementById("agregarItem").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Nuevo ítem";
  document.getElementById("lista").appendChild(newItem);
});

// Ejercicio 5: Crear un contador que se actualice cada segundo
let contador = 0;
setInterval(function () {
  contador++;
  document.getElementById("contador").textContent = contador;
}, 1000);

// Ejercicio 6: Cambiar el texto de un elemento al hacer clic
document.getElementById("cambiarTexto").addEventListener("click", function () {
  document.getElementById("elemento").textContent = "Texto cambiado";
});

// Ejercicio 7: Crear un formulario que imprima un mensaje al enviar
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado");
  });

// Ejercicio 8: Crear un botón que al hacer clic cambie el contenido de un contenedor
document.getElementById("boton").addEventListener("click", function () {
  document.getElementById("contenedor").textContent = "Contenido actualizado";
});

// Ejercicio 9: Cambiar la imagen de un elemento
document.getElementById("cambiarImagen").addEventListener("click", function () {
  document.getElementById("imagen").src = "nueva-imagen.jpg";
});

// Ejercicio 10: Crear un sistema de verificación de contraseña
document.getElementById("verificar").addEventListener("click", function () {
  const pass = document.getElementById("password").value;
  if (pass === "1234") {
    alert("Contraseña correcta");
  } else {
    alert("Contraseña incorrecta");
  }
});

// Ejercicio 11: Crear un sistema de verificación de edad
document.getElementById("verificarEdad").addEventListener("click", function () {
  const edad = parseInt(document.getElementById("edad").value);
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
});

// Ejercicio 12: Crear una función que aumente el tamaño de una fuente al hacer clic
document
  .getElementById("aumentarFuente")
  .addEventListener("click", function () {
    const elemento = document.getElementById("texto");
    let currentSize = parseInt(window.getComputedStyle(elemento).fontSize);
    elemento.style.fontSize = currentSize + 2 + "px";
  });

// Ejercicio 13: Crear una función que cambie la opacidad de un elemento
document
  .getElementById("cambiarOpacidad")
  .addEventListener("click", function () {
    const elem = document.getElementById("elemento");
    elem.style.opacity = elem.style.opacity === "0" ? "1" : "0";
  });

// Ejercicio 14: Crear un botón que cambie el estilo de un elemento
document.getElementById("cambiarEstilo").addEventListener("click", function () {
  document.getElementById("elemento").style.backgroundColor = "lightblue";
  document.getElementById("elemento").style.color = "white";
});

// Ejercicio 15: Crear un evento de clic que permita mover un elemento de un lugar a otro
document.getElementById("moverElemento").addEventListener("click", function () {
  document.getElementById("elemento").style.position = "absolute";
  document.getElementById("elemento").style.top = "100px";
  document.getElementById("elemento").style.left = "100px";
});

// Ejercicio 16: Mostrar un mensaje que indique si un valor está en un arreglo
const arreglo = ["apple", "banana", "cherry"];
document.getElementById("buscar").addEventListener("click", function () {
  const input = document.getElementById("fruta").value;
  if (arreglo.includes(input)) {
    alert("La fruta está en el arreglo");
  } else {
    alert("La fruta no está en el arreglo");
  }
});

// Ejercicio 17: Cambiar el texto de un enlace
document.getElementById("enlace").addEventListener("click", function () {
  this.textContent = "Nuevo texto del enlace";
});

// Ejercicio 18: Crear un sistema de encuesta con botones para elegir una opción
document.getElementById("encuesta").addEventListener("change", function () {
  alert("Gracias por votar!");
});

// Ejercicio 19: Crear un sistema de carga de imágenes al hacer clic en un botón
document.getElementById("cargarImagen").addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = "image.jpg";
  document.getElementById("contenedorImagen").appendChild(img);
});

// Ejercicio 20: Mostrar un cuadro emergente de confirmación al hacer clic
document.getElementById("confirmar").addEventListener("click", function () {
  if (confirm("¿Estás seguro?")) {
    alert("Confirmado");
  } else {
    alert("Cancelado");
  }
});

// Ejercicio 21: Crear un slider de imágenes
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}
setInterval(showSlides, 2000);

// Ejercicio 22: Cambiar el texto de un elemento al pasar el mouse
document.getElementById("elemento").addEventListener("mouseover", function () {
  this.textContent = "Has pasado el mouse!";
});

// Ejercicio 23: Crear una lista de compras con opción de eliminar
document.getElementById("agregarCompra").addEventListener("click", function () {
  const compra = document.createElement("li");
  compra.textContent = document.getElementById("compra").value;
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function () {
    compra.remove();
  });
  compra.appendChild(botonEliminar);
  document.getElementById("listaCompras").appendChild(compra);
});

// Ejercicio 24: Crear una función que cambie el color de fondo de un elemento
document.getElementById("colorBtn").addEventListener("click", function () {
  document.getElementById("elemento").style.backgroundColor = "orange";
});

// Ejercicio 25: Crear una función que muestre un mensaje personalizado
document.getElementById("mensajeBtn").addEventListener("click", function () {
  const mensaje = document.getElementById("mensaje").value;
  alert(mensaje);
});
