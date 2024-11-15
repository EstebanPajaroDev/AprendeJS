/*
¡Los ejercicios Bonus están aquí para llevar tus habilidades al siguiente nivel! 💪  
Estos retos te permitirán seguir desafiándote y mejorando.  
¡A por ellos!
*/

// Bonus 1: Crear una animación de texto que se desplace de izquierda a derecha
let x = 0;
setInterval(function () {
  x += 2;
  document.getElementById("text").style.transform = `translateX(${x}px)`;
  if (x > window.innerWidth) x = -200;
}, 20);

// Bonus 2: Crear un temporizador de cuenta regresiva
let countdown = 10;
const countdownInterval = setInterval(function () {
  document.getElementById("countdown").textContent = countdown;
  countdown--;
  if (countdown < 0) clearInterval(countdownInterval);
}, 1000);

// Bonus 3: Implementar un cambio de tema oscuro y claro
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// Bonus 4: Crear una tarjeta con un flip de animación
document.getElementById("card").addEventListener("click", function () {
  this.classList.toggle("flip");
});

// Bonus 5: Crear una animación de una pelota que rebote dentro de un contenedor
let ball = document.getElementById("ball");
let directionX = 1;
let directionY = 1;
const bounceInterval = setInterval(function () {
  const ballRect = ball.getBoundingClientRect();
  const containerRect = document
    .getElementById("container")
    .getBoundingClientRect();
  if (
    ballRect.right >= containerRect.right ||
    ballRect.left <= containerRect.left
  )
    directionX = -directionX;
  if (
    ballRect.bottom >= containerRect.bottom ||
    ballRect.top <= containerRect.top
  )
    directionY = -directionY;
  ball.style.transform = `translate(${directionX * 5}px, ${directionY * 5}px)`;
}, 10);

// Bonus 6: Implementar un efecto de zoom al pasar el ratón sobre una imagen
document.getElementById("zoomImage").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.5)";
});
document.getElementById("zoomImage").addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Bonus 7: Crear un formulario que envíe datos a un servidor ficticio
document
  .getElementById("submitForm")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("form"));
    fetch("/submit", { method: "POST", body: formData })
      .then((response) => response.json())
      .then((data) => alert("Datos enviados correctamente"))
      .catch((error) => alert("Error al enviar datos"));
  });

// Bonus 8: Crear un pop-up que se cierre al hacer clic fuera de él
const popup = document.getElementById("popup");
document.getElementById("openPopup").addEventListener("click", function () {
  popup.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (!popup.contains(event.target) && !event.target.id === "openPopup") {
    popup.style.display = "none";
  }
});

// Bonus 9: Crear una lista desplegable que se cierre automáticamente al seleccionar un ítem
document.getElementById("dropdown").addEventListener("change", function () {
  alert(`Has seleccionado: ${this.value}`);
  this.selectedIndex = -1; // Resetea el dropdown
});

// Bonus 10: Crear un contador que se incremente al hacer clic en un botón
let count = 0;
document.getElementById("counter").addEventListener("click", function () {
  count++;
  document.getElementById("countDisplay").textContent = `Contador: ${count}`;
});

// Bonus 11: Crear una función que cambie el color de fondo de un elemento aleatoriamente
function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}
document.getElementById("changeColor").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

// Bonus 12: Crear un efecto de desvanecimiento en un elemento al hacer clic
document.getElementById("fadeOut").addEventListener("click", function () {
  const element = document.getElementById("elementToFade");
  element.style.transition = "opacity 1s";
  element.style.opacity = 0;
});

// Bonus 13: Crear una lista de compras que permita marcar elementos como completados
document.getElementById("addItem").addEventListener("click", function () {
  const item = document.getElementById("item").value;
  const li = document.createElement("li");
  li.textContent = item;
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  document.getElementById("shoppingList").appendChild(li);
});

// Bonus 14: Crear un modal que se muestre al hacer clic en un botón
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Bonus 15: Crear una función que valide si un correo electrónico es válido
document.getElementById("validateEmail").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    alert("Correo válido");
  } else {
    alert("Correo inválido");
  }
});

// Bonus 16: Crear una animación que mueva un cuadrado a lo largo de la pantalla
let position = 0;
setInterval(function () {
  position += 5;
  document.getElementById(
    "square"
  ).style.transform = `translateX(${position}px)`;
  if (position > window.innerWidth) position = 0;
}, 20);

// Bonus 17: Crear un juego simple de adivinar un número
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("guessButton").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("guess").value);
  if (guess === randomNumber) {
    alert("¡Adivinaste el número!");
  } else if (guess < randomNumber) {
    alert("El número es mayor");
  } else {
    alert("El número es menor");
  }
});

// Bonus 18: Crear una función que muestre una alerta al hacer clic en un botón
document.getElementById("alertButton").addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

// Bonus 19: Crear un sistema de desplazamiento suave al hacer clic en un enlace
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  const targetId = this.getAttribute("href").substring(1);
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
});

// Bonus 20: Crear una calculadora que realice operaciones básicas
document.getElementById("calculate").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  document.getElementById("result").textContent = `Resultado: ${result}`;
});
