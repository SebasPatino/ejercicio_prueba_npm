import nombre from "prompt-sync";

// Importamos las funciones
import { 
    calcularSalarioBase, 
    calcularDeducciones, 
    calcularNeto, 
    registrarProductos 
} from "./modulos/index.js";


const intro = nombre();

const prompt = nombre();

// -------------------------------------------------------------------------------------------
// EJERCICIO 6
// -------------------------------------------------------------------------------------------

// // Entradas
// const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));
// const horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas: "));

// // Proceso modular
// const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
// const deducciones = calcularDeducciones(salarioBase);
// const salarioNeto = calcularNeto(salarioBase, deducciones);

// // Salidas
// console.log(`
//     Salario Base: $${salarioBase}
//     Deducciones: $${deducciones}
//     Salario Neto: $${salarioNeto}`);

// -------------------------------------------------------------------------------------------
// EJERCICIO 7
// -------------------------------------------------------------------------------------------

// Probamos la función pasando múltiples productos.
// Incluimos duplicados para verificar que la validación manual los elimine.
const productosRegistrados = registrarProductos(
  "Laptop",   // producto único
  "Mouse",    // producto único
  "Teclado",  // producto único
  "Laptop",   // duplicado
  "Monitor",  // producto único
  "Mouse"     // duplicado
);

// Mostramos el resultado final en consola.
// Debe aparecer una lista sin duplicados.
console.log("Lista final de productos:", productosRegistrados);

