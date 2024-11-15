// ==========================
// 🚀 Ejercicios de JavaScript 🚀
// ==========================

// ==========================
// 🟠 NIVEL INTERMEDIO (25 Ejercicios)
// ==========================

// 1. Crea una función que calcule la potencia de un número
function potencia(base, exponente) {
  return Math.pow(base, exponente);
}
console.log(potencia(2, 3)); // 8

// 2. Genera una lista de números primos hasta un número dado
function generarPrimos(limite) {
  const primos = [];
  for (let i = 2; i <= limite; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) primos.push(i);
  }
  return primos;
}
console.log(generarPrimos(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

// 3. Crea una función que convierta una cadena a "lenguaje hacker" (leet)
function leet(s) {
  const leetMap = { a: "4", e: "3", l: "1", o: "0", t: "7" };
  return s
    .split("")
    .map((c) => leetMap[c.toLowerCase()] || c)
    .join("");
}
console.log(leet("Hola Mundo")); // H0l4 M0nd0

// 4. Implementa una búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let izquierda = 0;
  let derecha = arr.length - 1;
  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);
    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) izquierda = medio + 1;
    else derecha = medio - 1;
  }
  return -1;
}
console.log(busquedaBinaria([1, 2, 3, 4, 5, 6], 4)); // 3

// 5. Genera la serie de Fibonacci hasta el enésimo número
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 6. Crea una función que invierta las palabras de una oración
function invertirPalabras(oracion) {
  return oracion.split(" ").reverse().join(" ");
}
console.log(invertirPalabras("JavaScript es divertido")); // divertido es JavaScript

// 7. Cifra una cadena usando el cifrado César
function cifradoCesar(str, desplazamiento) {
  return str
    .split("")
    .map((c) => {
      if (/[a-zA-Z]/.test(c)) {
        const code = c.charCodeAt(0);
        const base = c.toLowerCase() === c ? 97 : 65;
        return String.fromCharCode(
          ((code - base + desplazamiento) % 26) + base
        );
      }
      return c;
    })
    .join("");
}
console.log(cifradoCesar("Hola Mundo", 3)); // KrpD Pxqg

// 8. Encuentra el número de ocurrencias de cada letra en una cadena
function contarLetras(str) {
  const contador = {};
  for (let char of str) {
    if (char !== " ") {
      contador[char] = (contador[char] || 0) + 1;
    }
  }
  return contador;
}
console.log(contarLetras("Hola Mundo")); // { H: 1, o: 2, l: 1, a: 1, M: 1, u: 1, n: 1, d: 1 }

// 9. Calcula el promedio, moda y mediana de un array
function estadisticas(arr) {
  const suma = arr.reduce((a, b) => a + b, 0);
  const promedio = suma / arr.length;

  const moda = arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();

  const mediana = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];

  return { promedio, moda, mediana };
}
console.log(estadisticas([1, 2, 3, 4, 5, 5, 6])); // { promedio: 3.5714285714285716, moda: 5, mediana: 4 }

// 10. Valida si una fecha tiene formato "DD/MM/AAAA"
function validarFecha(fecha) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(fecha);
}
console.log(validarFecha("12/11/2024")); // true

// 11. Simula una pequeña calculadora (+, -, *, /)
function calculadora(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operador no válido";
  }
}
console.log(calculadora(10, 5, "+")); // 15

// 12. Ordena un array de objetos por una propiedad específica
function ordenarPorPropiedad(arr, propiedad) {
  return arr.sort((a, b) => a[propiedad] - b[propiedad]);
}
console.log(
  ordenarPorPropiedad(
    [
      { nombre: "Juan", edad: 30 },
      { nombre: "Ana", edad: 25 },
    ],
    "edad"
  )
); // [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }]

// 13. Encuentra los números que se repiten en un array
function encontrarDuplicados(arr) {
  const duplicados = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(duplicados)];
}
console.log(encontrarDuplicados([1, 2, 3, 2, 4, 5, 1])); // [2, 1]

// 14. Encuentra todos los números que faltan en una secuencia
function encontrarFaltantes(arr) {
  const todos = Array.from({ length: Math.max(...arr) }, (_, i) => i + 1);
  return todos.filter((num) => !arr.includes(num));
}
console.log(encontrarFaltantes([1, 3, 4, 6])); // [2, 5]

// 15. Implementa la función debounce
function debounce(func, tiempo) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), tiempo);
  };
}
const miDebounce = debounce(() => console.log("Debounced!"), 1000);
miDebounce(); // Se ejecuta después de 1 segundo

// 16. Crea un cronómetro simple con setInterval
function cronometro() {
  let segundos = 0;
  setInterval(() => {
    segundos++;
    console.log(segundos);
  }, 1000);
}
cronometro(); // Inicia un cronómetro

// 17. Convierte un número decimal a binario y viceversa
function decimalABinario(n) {
  return n.toString(2);
}

function binarioADecimal(b) {
  return parseInt(b, 2);
}

console.log(decimalABinario(10)); // "1010"
console.log(binarioADecimal("1010")); // 10

// 18. Implementa una cola con funciones de enqueue y dequeue
function Cola() {
  this.items = [];
  this.enqueue = function (item) {
    this.items.push(item);
  };
  this.dequeue = function () {
    return this.items.shift();
  };
  this.size = function () {
    return this.items.length;
  };
}
const miCola = new Cola();
miCola.enqueue(1);
miCola.enqueue(2);
console.log(miCola.dequeue()); // 1

// 19. Implementa una pila con funciones push y pop
function Pila() {
  this.items = [];
  this.push = function (item) {
    this.items.push(item);
  };
  this.pop = function () {
    return this.items.pop();
  };
  this.size = function () {
    return this.items.length;
  };
}
const miPila = new Pila();
miPila.push(1);
miPila.push(2);
console.log(miPila.pop()); // 2

// 20. Crea una función que verifique si dos cadenas son anagramas
function sonAnagramas(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(sonAnagramas("roma", "amro")); // true

// 21. Crea una función que convierta un número romano a un número entero
function romanoAEntero(romano) {
  const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < romano.length; i++) {
    if (valores[romano[i]] < valores[romano[i + 1]]) {
      total -= valores[romano[i]];
    } else {
      total += valores[romano[i]];
    }
  }
  return total;
}
console.log(romanoAEntero("XIV")); // 14

// 22. Encuentra el índice de un valor en una matriz bidimensional
function encontrarIndice(matriz, valor) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === valor) return [i, j];
    }
  }
  return [-1, -1];
}
console.log(
  encontrarIndice(
    [
      [1, 2],
      [3, 4],
    ],
    3
  )
); // [1, 0]

// 23. Genera una matriz con valores aleatorios
function generarMatrizAleatoria(filas, columnas) {
  return Array.from({ length: filas }, () =>
    Array.from({ length: columnas }, () => Math.floor(Math.random() * 100))
  );
}
console.log(generarMatrizAleatoria(2, 3)); // [[23, 56, 78], [12, 9, 30]]

// 24. Implementa un sistema de autenticación básico usando objetos
const usuarios = {
  usuario1: "password123",
  usuario2: "password456",
};

function autenticar(usuario, contrasena) {
  if (usuarios[usuario] === contrasena) return "Autenticación exitosa";
  return "Usuario o contraseña incorrectos";
}
console.log(autenticar("usuario1", "password123")); // Autenticación exitosa

// 25. Crea una función que elimine los elementos duplicados de un array
function eliminarDuplicados(arr) {
  return [...new Set(arr)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// ==========================
// 🎉 FIN DE LOS EJERCICIOS 🎉
// ==========================
