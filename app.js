import nombre from "prompt-sync";

// Importamos las funciones
import { 
    calcularSalarioBase, 
    calcularDeducciones, 
    calcularNeto, 
    registrarProductos,
    buscarCursos,
    procesarPagos,
    fusionarUsuarios
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

// // Definimos un listado de pagos como ejemplo.
// const pagos = [
//   { id: 1, cliente: "Juan", monto: 500, metodo: "Tarjeta" },
//   { id: 2, cliente: "Karol", monto: 200, metodo: "Efectivo" },
//   { id: 3, cliente: "Sebastián", monto: 1000, metodo: "Transferencia" },
//   { id: 4, cliente: "Nicolle", monto: 50, metodo: "Efectivo" }
// ];

// // Ejemplo 1: Regla de aprobación por monto mínimo (>= 200)
// const reglaMonto = pago => pago.monto >= 200;
// const resultadoMonto = procesarPagos(pagos, reglaMonto);
// console.log("Resultado por monto mínimo:", resultadoMonto);

// // Ejemplo 2: Regla de aprobación por método de pago (solo Tarjeta o Transferencia)
// const reglaMetodo = pago => pago.metodo !== "Efectivo";
// const resultadoMetodo = procesarPagos(pagos, reglaMetodo);
// console.log("Resultado por método de pago:", resultadoMetodo);

// // Ejemplo 3: Regla combinada (monto >= 300 y método distinto de Efectivo)
// const reglaCombinada = pago => pago.monto >= 300 && pago.metodo !== "Efectivo";
// const resultadoCombinada = procesarPagos(pagos, reglaCombinada);
// console.log("Resultado combinado:", resultadoCombinada);

// -------------------------------------------------------------------------------------------
// EJERCICIO 10
// -------------------------------------------------------------------------------------------

// // Lista de usuarios del sistema A
// const usuariosA = [
//   { documento: "101", nombre: "Juan" },
//   { documento: "102", nombre: "Karol", correo: "karol@gmail.com" }
// ];

// // Lista de usuarios del sistema B
// const usuariosB = [
//   { documento: "101", nombre: "Juan", correo: "juan@mail.com", telefono: "3125916383" },
//   { documento: "103", nombre: "Nicolle" }
// ];

// // Fusionamos las listas
// const usuariosFinal = fusionarUsuarios(usuariosA, usuariosB);

// // Mostramos el resultado
// console.log("Lista final de usuarios:", usuariosFinal);

// -------------------------------------------------------------------------------------------
// EJERCICIO 11
// -------------------------------------------------------------------------------------------

