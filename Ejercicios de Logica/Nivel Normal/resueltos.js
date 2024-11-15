"use strict";

// ==========================
// 🟠 NIVEL NORMAL (25 Ejercicios)
// ==========================

// 1. Crea una función que devuelva el mayor de dos números
function numMayor(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(numMayor(90, 8));

// 2. Crea una función que verifique si una cadena es un palíndromo
function esPalindromo(cadena) {
  const normalizada = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalizada === normalizada.split("").reverse().join("");
}
console.log(esPalindromo("Ana"));
console.log(esPalindromo("OpenAI"));

// 3. Encuentra el índice de un elemento en un array
const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(2));

// 4. Cuenta las vocales en una cadena
function contarVocales(cadena) {
  const vocales = "aeiou";
  let contador = 0;
  for (let letra of cadena.toLowerCase()) {
    if (vocales.includes(letra)) contador++;
  }
  return contador;
}
console.log(contarVocales("Hola Mundo"));

// 5. Crea una función que revierta una cadena
function revertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
console.log(revertirCadena("cadena"));

// 6. Multiplica todos los elementos de un array por un número
function multiplicarArray(arr, num) {
  return arr.map((elemento) => elemento * num);
}
console.log(multiplicarArray([1, 2, 3], 2));

// 7. Verifica si un número es primo
function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(esPrimo(5));

// 8. Usa filter() para obtener números pares de un array
const numerosPares = [1, 2, 3, 4, 6, 8];
const pares = numerosPares.filter((num) => num % 2 === 0);
console.log(pares);

// 9. Crea una función que convierta grados Celsius a Fahrenheit
function celsiusAFahrenheit(grados) {
  return grados * 1.8 + 32;
}
console.log(celsiusAFahrenheit(0));

// 10. Calcula el factorial de un número
function factorial(n) {
  let resultado = 1;
  for (let i = n; i > 1; i--) resultado *= i;
  return resultado;
}
console.log(factorial(5));

// 11. Suma los números de un array
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((total, num) => total + num, 0);
console.log(suma);

// 12. Verifica si un objeto tiene una propiedad específica
function tienePropiedad(obj, prop) {
  return prop in obj;
}
const persona = { nombre: "Esteban", edad: 30 };
console.log(tienePropiedad(persona, "nombre"));

// 13. Crea una función que cuente las palabras en una cadena
function contarPalabras(cadena) {
  return cadena.trim() ? cadena.trim().split(/\s+/).length : 0;
}
console.log(contarPalabras("Hola, ¿cómo estás?"));

// 14. Encuentra el número más pequeño en un array
function numeroMasPequeno(arr) {
  return Math.min(...arr);
}
console.log(numeroMasPequeno([7, 17, -3, 20]));

// 15. Usa map() para incrementar todos los números en un array
const numerosIncrementados = [1, 2, 3].map((num) => num + 1);
console.log(numerosIncrementados);

// 16. Remueve elementos duplicados de un array
function removerDuplicados(arr) {
  return [...new Set(arr)];
}
console.log(removerDuplicados([1, 2, 3, 1, 4, 2]));

// 17. Ordena un array de palabras por longitud
const palabras = ["hola", "Esteban", "mundo"];
console.log(palabras.sort((a, b) => a.length - b.length));

// 18. Calcula la media de un array de números
function calcularMedia(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(calcularMedia([5, 10, 15]));

// 19. Crea una función que genere un array de números aleatorios
function generarArrayAleatorio(cantidad, max) {
  return Array.from(
    { length: cantidad },
    () => Math.floor(Math.random() * max) + 1
  );
}
console.log(generarArrayAleatorio(5, 100));

// 20. Convierte el primer carácter de cada palabra en una cadena a mayúsculas
function capitalizarPalabras(cadena) {
  return cadena
    .split(" ")
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}
console.log(capitalizarPalabras("hola mundo"));

// 21. Verifica si una cadena tiene solo letras y números
function esAlfanumerico(cadena) {
  return /^[a-z0-9]+$/i.test(cadena);
}
console.log(esAlfanumerico("Hola123"));

// 22. Crea un temporizador que imprima un mensaje cada segundo
function iniciarTemporizador() {
  const intervalo = setInterval(
    () => console.log("Mensaje cada segundo"),
    1000
  );
  setTimeout(() => clearInterval(intervalo), 5000); // Para después de 5 segundos
}
iniciarTemporizador();

// 23. Filtra palabras de más de 5 letras en un array
const palabrasFiltradas = ["sol", "estrella", "noche"].filter(
  (palabra) => palabra.length > 5
);
console.log(palabrasFiltradas);

// 24. Usa reduce() para multiplicar todos los números en un array
const producto = [1, 2, 3, 4].reduce((total, num) => total * num, 1);
console.log(producto);

// 25. Calcula el MCD de dos números
function calcularMCD(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}
console.log(calcularMCD(12, 18));

// ==================================
// 🎉 FIN DE LOS EJERCICIOS 🎉
//  VAS MUY BIEENN, SIGUE ADELANTE!!
// ==================================
