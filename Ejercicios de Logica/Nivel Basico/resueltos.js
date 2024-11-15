"use strict";

// =========================
// 25 Ejercicios De Nivel Básico
// =========================

// =========================
// Cada salida de los ejercicios contiene una estrella ⭐
// para identificar el ejercicio segun su numero
// =========================

// 1. Imprime "Hola, Mundo" en la consola
console.log("Hola mundo, soy Esteban | 1 ⭐");

// 2. Declara variables de diferentes tipos de datos
let tipoNumber = 4;
let tipoString = "Soy un string";
let tipoBoolean = true;
console.log(tipoString, tipoNumber, tipoBoolean, "| 2 ⭐");

// 3. Convierte una cadena a mayúsculas
let cadena = "soy un texto en minusculas";
console.log(cadena.toUpperCase(), "| 3 ⭐");

// 4. Convierte una cadena a minúsculas
let cadenaM = "AHORA SOY UNA CADENA EN MAYUSCULAS";
console.log(cadenaM.toLowerCase(), "| 4 ⭐");

// 5. Crea una función que sume dos números
function suma(a, b) {
  let resultado = a + b;
  console.log("Suma de números =", resultado, "| 5 ⭐");
}
suma(-12, 42);

// 6. Declara un array con tres elementos y muestra el primero
let array = ["Agua💧", "Tierra🌏", "Fuego🔥"];
console.log("Objeto seleccionado:", array[0], "| 6 ⭐");

// 7. Encuentra el tamaño de una cadena
let cadenaTamaño = "Esta es una cadena de texto";
console.log("Esta cadena tiene", cadenaTamaño.length, "caracteres | 7 ⭐");

// 8. Concatena dos cadenas
let cadna1 = "Hola, soy un";
let cadna2 = " texto concatenado";
console.log(cadna1 + cadna2, "| 8 ⭐");

// 9. Crea una función que reciba un nombre y lo salude
function saludo(nombre) {
  console.log("Hola " + nombre + ", mucho gusto | 9 ⭐");
}
saludo("Esteban");

// 10. Declara un objeto con propiedades "nombre" y "edad"
let usuario = { nombre: "Esteban", edad: 20 };
console.log(usuario, "| 10 ⭐");

// 11. Usa if para verificar si un número es positivo
let numero = -42;
if (numero > 0) {
  console.log("El número", numero, "es positivo | 11 ⭐");
} else {
  console.log("El número es negativo | 11 ⭐");
}

// 12. Usa switch para detectar el valor de una variable del 1 al 3
let num = 3;
switch (num) {
  case 1:
    console.log("Soy Número 1 | 12 ⭐");
    break;
  case 2:
    console.log("Soy Número 2 | 12 ⭐");
    break;
  case 3:
    console.log("Soy Número 3 | 12 ⭐");
    break;
  default:
    console.log("El número no está entre el 1 y 3 | 12 ⭐");
}

// 13. Declara un array y recórrelo con un forEach
let porCada = [1, 2, 3, 4, 5];
porCada.forEach((elemento) => console.log(elemento));
console.log("| 13 ⭐");

// 14. Multiplica dos números y muestra el resultado
let multiplica1 = 2;
let multiplica2 = 3;
console.log("El resultado es:", multiplica1 * multiplica2, "| 14 ⭐");

// 15. Verifica si un número es par o impar
function verificar(num) {
  if (num % 2 === 0) {
    console.log("El número es par | 15 ⭐");
  } else {
    console.log("El número es impar | 15 ⭐");
  }
}
verificar(3);

// 16. Crea una función que devuelva el cuadrado de un número
function cuadrado(numero) {
  console.log("El cuadrado de " + numero + " es " + numero * numero, "| 16 ⭐");
}
cuadrado(8);

// 17. Convierte un número a cadena
let numAstring = 8;
console.log(numAstring.toString(), "| 17 ⭐");

// 18. Verifica si una cadena contiene una palabra específica
function palabra(verificar) {
  console.log(
    verificar.includes("una") ? "Contiene 'una'" : "No contiene 'una'",
    "| 18 ⭐"
  );
}
palabra("verificare una palabra especifica");

// 19. Declara una variable const y asigna un valor
const bebida = "Cocacola";
// bebida = "Pepsi"; // Descomenta para ver el error
console.log(bebida, "| 19 ⭐");

// 20. Suma todos los elementos de un array de números
let numeros = [2, 4, 7, 8, 3];
let sumar = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("La suma de todos los elementos es:", sumar, "| 20 ⭐");

// 21. Usa Math.random() para obtener un número aleatorio
console.log(Math.random(), "| 21 ⭐");

// 22. Usa Math.floor() para redondear un número
console.log(Math.floor(1.1), "| 22 ⭐");

// 23. Ordena un array de números de menor a mayor
let ordenar = [2, 1, 4, 6, 8];
console.log(
  ordenar.sort((a, b) => a - b),
  "| 23 ⭐"
);

// 24. Agrega un elemento al final de un array
let addArray = ["⭐", "🔥", "🌠"];
addArray.push("❤️");
console.log(addArray, "| 24 ⭐");

// 25. Remueve el último elemento de un array
console.log(addArray.pop(), "| 25 ⭐");
