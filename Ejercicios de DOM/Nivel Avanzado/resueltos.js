/*
¡Bienvenido al Nivel Avanzado! 🚀  
Aquí los retos son más complejos y pondrán a prueba tus habilidades.  
¡Es momento de demostrar lo que sabes!
*/

// Ejercicio 1: Crear un sistema de navegación con animaciones
document.getElementById("menu").addEventListener("click", function () {
  const menuItems = document.querySelectorAll(".item");
  menuItems.forEach((item) => {
    item.style.transition = "all 0.3s ease";
    item.style.transform = "scale(1.2)";
  });
});

// Ejercicio 2: Crear un efecto de parallax en una imagen
let yOffset = window.pageYOffset;
document.getElementById("parallax").style.backgroundPosition = `center ${
  yOffset * 0.5
}px`;

// Ejercicio 3: Crear un sistema de búsqueda en una lista de productos
const productos = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];
document.getElementById("buscador").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const resultados = productos.filter((producto) =>
    producto.toLowerCase().includes(query)
  );
  document.getElementById("resultadoBusqueda").textContent =
    resultados.join(", ");
});

// Ejercicio 4: Crear un cronómetro con botones de start, stop y reset
let tiempo = 0;
let cronometro;
document.getElementById("start").addEventListener("click", function () {
  cronometro = setInterval(function () {
    tiempo++;
    document.getElementById("tiempo").textContent = `Tiempo: ${tiempo}`;
  }, 1000);
});
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(cronometro);
});
document.getElementById("reset").addEventListener("click", function () {
  tiempo = 0;
  document.getElementById("tiempo").textContent = "Tiempo: 0";
});

// Ejercicio 5: Crear una galería de imágenes que cambie de imagen con un clic
let currentImage = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
document.getElementById("nextImage").addEventListener("click", function () {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("gallery").src = images[currentImage];
});

// Ejercicio 6: Crear un formulario dinámico que permita agregar campos
document.getElementById("addField").addEventListener("click", function () {
  const newField = document.createElement("input");
  newField.type = "text";
  document.getElementById("form").appendChild(newField);
});

// Ejercicio 7: Crear un gráfico interactivo con datos
const data = [10, 20, 30, 40];
document.getElementById("grafico").innerHTML = data
  .map((value) => `<div class="barra" style="height: ${value}px;"></div>`)
  .join("");

// Ejercicio 8: Crear una página de login que valide el usuario y contraseña
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const pass = document.getElementById("password").value;
    if (user === "admin" && pass === "1234") {
      alert("Login exitoso");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });

// Ejercicio 9: Implementar una barra de progreso
let progress = 0;
const interval = setInterval(function () {
  progress++;
  document.getElementById("progressBar").style.width = `${progress}%`;
  if (progress === 100) {
    clearInterval(interval);
  }
}, 100);

// Ejercicio 10: Crear un sistema de drag and drop
document
  .getElementById("dragElement")
  .addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
  });
document.getElementById("dropZone").addEventListener("drop", function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
});
document
  .getElementById("dropZone")
  .addEventListener("dragover", function (event) {
    event.preventDefault();
  });

// Ejercicio 11: Implementar un autocompletado en un campo de texto
const suggestions = ["apple", "banana", "cherry", "date", "elderberry"];
document.getElementById("autocomplete").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const results = suggestions.filter((item) =>
    item.toLowerCase().includes(query)
  );
  document.getElementById("suggestions").innerHTML = results
    .map((item) => `<div>${item}</div>`)
    .join("");
});

// Ejercicio 12: Crear un sistema de votación con botones
const votos = { positivo: 0, negativo: 0 };
document.getElementById("positivo").addEventListener("click", function () {
  votos.positivo++;
  document.getElementById(
    "resultados"
  ).textContent = `Positivo: ${votos.positivo}, Negativo: ${votos.negativo}`;
});
document.getElementById("negativo").addEventListener("click", function () {
  votos.negativo++;
  document.getElementById(
    "resultados"
  ).textContent = `Positivo: ${votos.positivo}, Negativo: ${votos.negativo}`;
});

// Ejercicio 13: Crear un sistema de paginación para una lista de elementos
let page = 1;
const itemsPerPage = 5;
const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);
function renderPage() {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  document.getElementById("items").innerHTML = items
    .slice(startIndex, endIndex)
    .join("<br>");
}
document.getElementById("nextPage").addEventListener("click", function () {
  page++;
  renderPage();
});
document.getElementById("prevPage").addEventListener("click", function () {
  page--;
  renderPage();
});
renderPage();

// Ejercicio 14: Crear una lista de comentarios donde los usuarios puedan agregar su opinión
document.getElementById("addComment").addEventListener("click", function () {
  const comment = document.getElementById("comment").value;
  const li = document.createElement("li");
  li.textContent = comment;
  document.getElementById("comments").appendChild(li);
});

// Ejercicio 15: Implementar un reloj digital
function mostrarReloj() {
  const tiempo = new Date().toLocaleTimeString();
  document.getElementById("reloj").textContent = tiempo;
}
setInterval(mostrarReloj, 1000);

// Ejercicio 16: Crear un botón que cambie el estilo de la página
document.getElementById("cambiarEstilo").addEventListener("click", function () {
  document.body.classList.toggle("nuevo-estilo");
});

// Ejercicio 17: Crear un efecto de sombra en un elemento al hacer hover
document.getElementById("elemento").addEventListener("mouseover", function () {
  this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
});
document.getElementById("elemento").addEventListener("mouseout", function () {
  this.style.boxShadow = "none";
});

// Ejercicio 18: Crear un sistema de filtrado de productos por categoría
const productos2 = [
  { nombre: "Producto 1", categoria: "Electrónica" },
  { nombre: "Producto 2", categoria: "Ropa" },
  { nombre: "Producto 3", categoria: "Electrónica" },
];
document.getElementById("filtro").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const resultados = productos2.filter((producto) =>
    producto.categoria.toLowerCase().includes(filtro)
  );
  document.getElementById("resultadoFiltro").textContent = resultados
    .map((p) => p.nombre)
    .join(", ");
});

// Ejercicio 19: Crear un carrusel de imágenes
let currentSlide = 0;
const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
function mostrarSlide() {
  document.getElementById("carousel").src = slides[currentSlide];
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(mostrarSlide, 3000);

// Ejercicio 20: Crear una tabla que permita ordenar por columnas
let datad = [
  { nombre: "John", edad: 30 },
  { nombre: "Jane", edad: 25 },
  { nombre: "Mike", edad: 35 },
];
document.getElementById("sortName").addEventListener("click", function () {
  datad.sort((a, b) => a.nombre.localeCompare(b.nombre));
  renderTable();
});
document.getElementById("sortAge").addEventListener("click", function () {
  data.sort((a, b) => a.edad - b.edad);
  renderTable();
});
function renderTable() {
  document.getElementById("tableBody").innerHTML = data
    .map((row) => `<tr><td>${row.nombre}</td><td>${row.edad}</td></tr>`)
    .join("");
}
renderTable();

// Ejercicio 21: Crear una lista de tareas con opción de eliminar
document.getElementById("addTask").addEventListener("click", function () {
  const task = document.getElementById("task").value;
  const li = document.createElement("li");
  li.textContent = task;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(li);
});

// Ejercicio 22: Crear un sistema de calificación con estrellas
document.getElementById("rating").addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    const rating = event.target.getAttribute("data-rating");
    alert(`Calificación: ${rating}`);
  }
});

// Ejercicio 23: Crear un sistema de comentarios con respuestas
document.getElementById("addComment").addEventListener("click", function () {
  const comment = document.getElementById("comment").value;
  const li = document.createElement("li");
  li.textContent = comment;
  const replyButton = document.createElement("button");
  replyButton.textContent = "Responder";
  replyButton.addEventListener("click", function () {
    const reply = prompt("Escribe tu respuesta");
    const replyLi = document.createElement("li");
    replyLi.textContent = reply;
    li.appendChild(replyLi);
  });
  li.appendChild(replyButton);
  document.getElementById("commentList").appendChild(li);
});

// Ejercicio 24: Crear un sistema de formulario con validación en tiempo real
document.getElementById("input").addEventListener("input", function () {
  const value = this.value;
  if (value.length >= 6) {
    this.setCustomValidity("");
  } else {
    this.setCustomValidity("Debe tener al menos 6 caracteres");
  }
});

// Ejercicio 25: Crear una función que convierta texto a mayúsculas en un input
document.getElementById("input").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});
