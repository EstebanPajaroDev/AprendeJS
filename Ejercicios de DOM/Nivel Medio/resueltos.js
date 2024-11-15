/*
¡Bienvenido al Nivel Medio! 🚀  
Aquí se intensifican los retos y comenzamos a trabajar con conceptos más complejos.  
¡Pon a prueba tus habilidades con estos ejercicios!
*/

// Ejercicio 1: Crear un temporizador que muestre el tiempo transcurrido en segundos
let segundos = 0;
setInterval(function () {
  segundos++;
  document.getElementById(
    "tiempo"
  ).textContent = `Tiempo transcurrido: ${segundos} segundos`;
}, 1000);

// Ejercicio 2: Cambiar el color de fondo de un elemento con un intervalo de tiempo
let colores = ["red", "blue", "green", "yellow", "purple"];
let index = 0;
setInterval(function () {
  document.getElementById("elemento").style.backgroundColor = colores[index];
  index = (index + 1) % colores.length;
}, 1000);

// Ejercicio 3: Crear un menú desplegable interactivo
document.getElementById("menuBtn").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

// Ejercicio 4: Crear un contador regresivo
let contadorRegresivo = 10;
const intervalId = setInterval(function () {
  document.getElementById(
    "contadorRegresivo"
  ).textContent = `Tiempo restante: ${contadorRegresivo}`;
  if (contadorRegresivo <= 0) {
    clearInterval(intervalId);
  }
  contadorRegresivo--;
}, 1000);

// Ejercicio 5: Crear un formulario que valide el campo de correo electrónico
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Por favor ingresa un correo electrónico válido");
    } else {
      alert("Correo electrónico válido");
    }
  });

// Ejercicio 6: Crear una lista de tareas donde puedas eliminar una tarea
document.getElementById("agregarTarea").addEventListener("click", function () {
  const tarea = document.getElementById("tarea").value;
  const li = document.createElement("li");
  li.textContent = tarea;
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(botonEliminar);
  document.getElementById("listaTareas").appendChild(li);
});

// Ejercicio 7: Cambiar el color de fondo de la página con un botón
document.getElementById("colorFondo").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
});

// Ejercicio 8: Crear un slider de imágenes con botones de siguiente y anterior
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function mostrarSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}
document.getElementById("next").addEventListener("click", function () {
  mostrarSlide();
});
document.getElementById("prev").addEventListener("click", function () {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  mostrarSlide();
});
setInterval(mostrarSlide, 2000);

// Ejercicio 9: Cambiar el tamaño de un elemento dinámicamente
document.getElementById("aumentar").addEventListener("click", function () {
  const elemento = document.getElementById("elemento");
  let size = parseInt(window.getComputedStyle(elemento).fontSize);
  elemento.style.fontSize = size + 2 + "px";
});

// Ejercicio 10: Mostrar un mensaje cuando el usuario haga scroll en la página
window.addEventListener("scroll", function () {
  alert("Estás haciendo scroll");
});

// Ejercicio 11: Crear un formulario que muestre un mensaje de error si el campo está vacío
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const campo = document.getElementById("campo");
    if (campo.value === "") {
      alert("Este campo no puede estar vacío");
    } else {
      alert("Formulario enviado");
    }
  });

// Ejercicio 12: Crear un sistema de verificación de edad
document.getElementById("verificarEdad").addEventListener("click", function () {
  const edad = parseInt(document.getElementById("edad").value);
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
});

// Ejercicio 13: Crear una calculadora básica con botones
document.getElementById("sumar").addEventListener("click", function () {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const resultado = num1 + num2;
  document.getElementById("resultado").textContent = resultado;
});

// Ejercicio 14: Mostrar la fecha y hora actual
const mostrarFecha = function () {
  const fecha = new Date();
  document.getElementById("fecha").textContent = fecha.toLocaleString();
};
setInterval(mostrarFecha, 1000);

// Ejercicio 15: Crear un formulario de contacto que valide los campos
document
  .getElementById("contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    if (nombre === "" || email === "") {
      alert("Por favor, completa todos los campos");
    } else {
      alert("Formulario enviado");
    }
  });

// Ejercicio 16: Crear un menú de navegación que cambie de color al pasar el ratón
document.getElementById("menu").addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightblue";
});
document.getElementById("menu").addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});

// Ejercicio 17: Cambiar la fuente de un texto al hacer clic en un botón
document.getElementById("cambiarFuente").addEventListener("click", function () {
  document.getElementById("texto").style.fontFamily = "Arial, sans-serif";
});

// Ejercicio 18: Validar una contraseña que contenga al menos 6 caracteres
document.getElementById("validar").addEventListener("click", function () {
  const pass = document.getElementById("password").value;
  if (pass.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
  } else {
    alert("Contraseña válida");
  }
});

// Ejercicio 19: Crear una función que muestre el texto de un input al hacer clic
document.getElementById("mostrarTexto").addEventListener("click", function () {
  const texto = document.getElementById("inputTexto").value;
  alert(texto);
});

// Ejercicio 20: Crear una función que añada un elemento de lista con un botón
document.getElementById("agregar").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Nuevo ítem";
  document.getElementById("lista").appendChild(item);
});

// Ejercicio 21: Crear una lista de productos y mostrar el precio total al hacer clic
const productos = [
  { nombre: "Producto 1", precio: 10 },
  { nombre: "Producto 2", precio: 20 },
  { nombre: "Producto 3", precio: 30 },
];
document.getElementById("total").addEventListener("click", function () {
  let total = 0;
  productos.forEach((producto) => (total += producto.precio));
  document.getElementById(
    "resultadoTotal"
  ).textContent = `Precio total: ${total}`;
});

// Ejercicio 22: Crear un botón que cambie el fondo de un elemento
document.getElementById("fondo").addEventListener("click", function () {
  document.getElementById("elemento").style.backgroundColor = "lightgray";
});

// Ejercicio 23: Crear un sistema de verificación de edad
document.getElementById("verificarEdad").addEventListener("click", function () {
  const edad = parseInt(document.getElementById("edad").value);
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
});

// Ejercicio 24: Crear una tabla y agregarle filas dinámicamente
document.getElementById("agregarFila").addEventListener("click", function () {
  const fila = document.createElement("tr");
  const celda = document.createElement("td");
  celda.textContent = "Nueva fila";
  fila.appendChild(celda);
  document.getElementById("tabla").appendChild(fila);
});

// Ejercicio 25: Crear un formulario que valide la entrada de un teléfono
document
  .getElementById("validarTelefono")
  .addEventListener("click", function () {
    const telefono = document.getElementById("telefono").value;
    const regex = /^\d{10}$/;
    if (regex.test(telefono)) {
      alert("Teléfono válido");
    } else {
      alert("Teléfono inválido");
    }
  });
