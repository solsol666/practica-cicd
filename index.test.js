const { sumar } = require('./index');

if (sumar(2, 3) !== 5) {
  console.error("Error: La prueba falló intencionalmente.");
  process.exit(1); // Esto es lo que le avisa a GitHub Actions que el workflow falló
} else {
  console.log("¡Prueba pasada con éxito!");
}