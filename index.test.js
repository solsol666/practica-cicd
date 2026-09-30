const { sumar } = require('./index');

if (sumar(2, 3) !== 5) {
  console.error("Error: La prueba falló.");
  process.exit(1);
} else {
  console.log("¡Prueba pasada con éxito!");
}