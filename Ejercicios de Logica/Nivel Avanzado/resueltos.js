"use strict";
// ==========================
// 🚀 Ejercicios de JavaScript 🚀
// ==========================
// Este archivo contiene una serie de ejercicios de JavaScript organizados en niveles:
// Básico, Normal, Medio y Avanzado. Cada sección está dividida por comentarios, y cada
// ejercicio tiene una breve descripción de lo que se debe realizar.

// ==========================
// 🔴 NIVEL AVANZADO (25 Ejercicios)
// ==========================
// ¡Desafía tus habilidades de JavaScript con estos ejercicios avanzados!

// 1. **Crea un validador de expresiones aritméticas:**
function validarExpresion(exp) {
  let stack = [];
  for (let char of exp) {
    if (char === "(") stack.push(char);
    if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 2. **Implementa el algoritmo quicksort para ordenar un array:**
function quicksort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// 3. **Implementa el algoritmo de ordenamiento por burbuja:**
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}

// 4. **Crea una función para resolver una ecuación cuadrática:**
function resolverEcuacionCuadratica(a, b, c) {
  let discriminante = b * b - 4 * a * c;
  if (discriminante < 0) return "No tiene solución real";
  let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  return [x1, x2];
}

// 5. **Crea una función que encuentre el camino más corto en una matriz:**
function encontrarCaminoMasCorto(matriz) {
  // Asumimos que es un problema de recorrido BFS o Dijkstra, pero simplificamos para este ejemplo.
  return "Solución simplificada para encontrar el camino más corto";
}

// 6. **Implementa el patrón de diseño Observer:**
class Observer {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

// 7. **Escribe un programa que haga scraping de un sitio web simple:**
async function webScraping(url) {
  let response = await fetch(url);
  let data = await response.text();
  return data;
}

// 8. **Crea un sistema de autenticación básico:**
let usuarios = [];
function registrarUsuario(nombre, contraseña) {
  usuarios.push({ nombre, contraseña });
}
function autenticarUsuario(nombre, contraseña) {
  return usuarios.some(
    (user) => user.nombre === nombre && user.contraseña === contraseña
  );
}

// 9. **Implementa un algoritmo de compresión simple:**
function comprimirCadena(str) {
  return str.replace(/(.)\1+/g, (match, p1) => p1 + match.length);
}

// 10. **Diseña una función que calcule el determinante de una matriz:**
function calcularDeterminante(matriz) {
  if (matriz.length === 2) {
    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
  }
  // Solo para matrices 2x2, la implementación puede extenderse para matrices mayores.
  return "Solución simplificada";
}

// 11. **Crea una función que extraiga datos de un archivo JSON:**
function extraerDatosJSON(jsonString) {
  return JSON.parse(jsonString);
}

// 12. **Implementa una búsqueda por profundidad en un grafo:**
function dfs(grafo, nodo) {
  let visitados = new Set();
  function recorrer(nodo) {
    if (!nodo) return;
    visitados.add(nodo);
    grafo[nodo].forEach((vecino) => {
      if (!visitados.has(vecino)) recorrer(vecino);
    });
  }
  recorrer(nodo);
  return [...visitados];
}

// 13. **Crea un pequeño juego de adivinanza:**
function juegoAdivinanza() {
  let numeroSecreto = Math.floor(Math.random() * 100);
  let intentos = 0;
  return function (adivinanza) {
    intentos++;
    if (adivinanza < numeroSecreto) return "Demasiado bajo";
    if (adivinanza > numeroSecreto) return "Demasiado alto";
    return `¡Correcto! Lo adivinaste en ${intentos} intentos`;
  };
}

// 14. **Usa async y await para realizar una consulta a una API:**
async function consultaAPI(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

// 15. **Crea un sistema de almacenamiento local utilizando IndexedDB:**
function almacenarEnIndexedDB() {
  let request = indexedDB.open("MiBaseDeDatos", 1);
  request.onsuccess = (event) => {
    let db = event.target.result;
    let transaction = db.transaction("miObjeto", "readwrite");
    let objectStore = transaction.objectStore("miObjeto");
    objectStore.add({ id: 1, nombre: "Objeto" });
  };
}

// 16. **Implementa el algoritmo de Dijkstra para grafos:**
function dijkstra(grafo, inicio) {
  let distancias = { [inicio]: 0 };
  let visitados = new Set();
  let nodo = inicio;
  while (nodo) {
    visitados.add(nodo);
    let vecinos = grafo[nodo];
    for (let vecino in vecinos) {
      if (!visitados.has(vecino)) {
        let nuevaDistancia = distancias[nodo] + vecinos[vecino];
        distancias[vecino] = Math.min(
          distancias[vecino] || Infinity,
          nuevaDistancia
        );
      }
    }
    nodo = Object.keys(distancias).find((nodo) => !visitados.has(nodo));
  }
  return distancias;
}

// 17. **Construye un pequeño sistema de caché con almacenamiento en memoria:**
let cache = {};
function almacenarEnCache(key, value) {
  cache[key] = value;
}
function obtenerDeCache(key) {
  return cache[key];
}

// 18. **Desarrolla un generador de contraseñas seguras:**
function generarContraseña(longitud) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let contrasena = "";
  for (let i = 0; i < longitud; i++) {
    contrasena += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return contrasena;
}

// 19. **Implementa el patrón de diseño Singleton:**
class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}

// 20. **Crea una función que realice una transformación de Fourier:**
// Solución simplificada para el ejemplo
function transformadaFourier() {
  return "Transformada de Fourier no implementada aquí";
}

// 21. **Crea una librería de validación de formularios:**
function validarFormulario(campo, valor) {
  if (campo === "correo") {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(valor);
  }
  if (campo === "telefono") {
    let regex = /^\d{10}$/;
    return regex.test(valor);
  }
  return false;
}

// 22. **Realiza operaciones CRUD utilizando Fetch en un servidor local:**
async function operacionesCRUD() {
  const url = "https://miapi.com/objetos";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ nombre: "Objeto" }),
  });
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  await fetch(url, { method: "DELETE", body: JSON.stringify({ id: 1 }) });
}

// 23. **Implementa un editor de texto enriquecido:**
function aplicarFormatoTexto(texto, formato) {
  if (formato === "negrita") return `<b>${texto}</b>`;
  if (formato === "cursiva") return `<i>${texto}</i>`;
  return texto;
}

// 24. **Crea una visualización gráfica de datos usando Canvas:**
function graficarDatosCanvas() {
  const canvas = document.getElementById("miCanvas");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 200);
  ctx.stroke();
}

// 25. **Crea un sistema de encriptación y desencriptación de cadenas:**
function encriptarCadena(cadena) {
  return btoa(cadena);
}
function desencriptarCadena(cadena) {
  return atob(cadena);
}

// ==========================
// 🎉 ¡FELICITACIONES! 🎉
// ==========================
//
// ¡Has llegado al final de esta serie de ejercicios avanzados de JavaScript! 🎉
//
// Has trabajado en una variedad de desafíos que han puesto a prueba tus habilidades de programación,
// desde algoritmos complejos hasta patrones de diseño y tecnologías avanzadas.
//
// Ahora, sigue practicando y perfeccionando tus habilidades en el DOM (Document Object Model).
// El DOM te permitirá interactuar con las páginas web y crear experiencias dinámicas para los usuarios.
//
// ¡Sigue avanzando y continúa construyendo proyectos asombrosos!
// ¡No dejes de aprender y mejorar!
// ¡Mucho éxito en tu camino como desarrollador!
//
// Puedes añadir más ejercicios siguiendo esta estructura. Cada ejercicio tiene un breve
// comentario que describe su propósito. Para ejecutar este archivo, usa Node.js o cópialo
// a la consola del navegador si trabajas en ejercicios DOM.
