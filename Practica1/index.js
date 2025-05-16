// * Ejercicio A.

let nombre = "Armando";
const edad = 25;

nombre = "Ana María";

const saludo = `Hola, ${nombre}. Tienes ${edad} años!`;

console.log(saludo)

// * Ejercicio B.

const cuadrado = numero => numero * numero;

console.log(cuadrado(2));
console.log(cuadrado(5));
console.log(cuadrado(-3));

const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años!`;
console.log(saludoPersonalizado("Ayrton", "20"));