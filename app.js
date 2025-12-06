import nombre from "prompt-sync";

// Importamos las funciones
import { 
    calcularSalarioBase, 
    calcularDeducciones, 
    calcularNeto, 
    registrarProductos,
    buscarCursos,
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

// // Probamos la función pasando múltiples productos.
// // Incluimos duplicados para verificar que la validación manual los elimine.
// const productosRegistrados = registrarProductos(
//   "Laptop",   // producto único
//   "Mouse",    // producto único
//   "Teclado",  // producto único
//   "Laptop",   // duplicado
//   "Monitor",  // producto único
//   "Mouse"     // duplicado
// );

// // Mostramos el resultado final en consola.
// // Debe aparecer una lista sin duplicados.
// console.log("Lista final de productos:", productosRegistrados);

// -------------------------------------------------------------------------------------------
// EJERCICIO 8
// -------------------------------------------------------------------------------------------

// // Definimos un catálogo de cursos como ejemplo.
// const catalogo = [
//   { nombre: "JavaScript Básico", categoria: "Programación", duracion: 30 },
//   { nombre: "Python Básico", categoria: "Programación", duracion: 50 },
//   { nombre: "HTML Avanzado", categoria: "Programación", duracion: 20 },
//   { nombre: "Marketing Digital", categoria: "Marketing", duracion: 40 },
//   { nombre: "SQL para principiantes", categoria: "Bases de Datos", duracion: 25 },
// ];

// // Ejemplo 1: Filtrar por categoría "Programación"
// const cursosProgramacion = buscarCursos(catalogo, curso => curso.categoria === "Programación");
// console.log("Cursos de Programación:", cursosProgramacion);

// // Ejemplo 2: Filtrar por duración mayor a 30 horas
// const cursosLargos = buscarCursos(catalogo, curso => curso.duracion > 30);
// console.log("Cursos con más de 30 horas:", cursosLargos);

// // Ejemplo 3: Filtrar por coincidencia en el nombre (contenga 'SQL')
// const cursosSQL = buscarCursos(catalogo, curso => curso.nombre.includes("SQL"));
// console.log("Cursos relacionados con SQL:", cursosSQL);

// -------------------------------------------------------------------------------------------
// EJERCICIO 9
// -------------------------------------------------------------------------------------------

