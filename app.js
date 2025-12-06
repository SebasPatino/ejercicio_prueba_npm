import nombre from "prompt-sync";

// Importamos las funciones
import { 
    calcularPromedio,
    calcularInventario,
    calcularSalarioBase, 
    calcularDeducciones, 
    calcularNeto, 
    registrarProductos,
    buscarCursos,
    procesarPagos,
    fusionarUsuarios,
    generarResumen,
    seleccionarPaciente,
    analizarGastos,
    filtrarActivos, 
    contarParticipantes, 
    evaluarProyecto,
    generarRecomendaciones,
    analizarUsuarios,
    procesarInventario
} from "./modulos/index.js";


const intro = nombre();

const prompt = nombre();

// -------------------------------------------------------------------------------------------
// EJERCICIO 1
// -------------------------------------------------------------------------------------------

  // Creamos un arreglo vacío para almacenar los productos
  const inventario = [];

  // Pedimos al usuario la cantidad de productos que desea registrar
  const cantidad = parseInt(prompt("¿Cuántos productos desea registrar? "));

  // Usamos un ciclo for para pedir los datos de cada producto
  for (let i = 0; i < cantidad; i++) {
    let nombre;
    let cantidadProducto;

    // Validación persistente: repetimos hasta que el usuario ingrese un nombre válido
    do {
      nombre = prompt(`Ingrese el nombre del producto #${i + 1}: `);
    } while (!nombre || nombre.trim() === "");

    // Validación persistente: repetimos hasta que el usuario ingrese una cantidad válida
    do {
      cantidadProducto = parseInt(prompt(`Ingrese la cantidad del producto "${nombre}": `));
    } while (isNaN(cantidadProducto) || cantidadProducto < 0);

    // Agregamos el producto al inventario
    inventario.push({ nombre, cantidad: cantidadProducto });
  }

  // Mostramos el inventario en consola
  console.log("Inventario registrado:");
  inventario.forEach(p => console.log(`${p.nombre}: ${p.cantidad}`));

  // Ejemplo de uso de la función auxiliar calcularInventario
  const cantidadInicial = parseInt(prompt("Ingrese cantidad inicial: "));
  const cantidadVendida = parseInt(prompt("Ingrese cantidad vendida: "));
  const cantidadRecibida = parseInt(prompt("Ingrese cantidad recibida: "));

  const resultado = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);
  console.log(resultado)

// -------------------------------------------------------------------------------------------
// EJERCICIO 2
// -------------------------------------------------------------------------------------------



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

// // Definimos un mensaje completo como ejemplo.
// const mensaje = {
//   remitente: "Nicolle",
//   contenido: "Hola Sebastián, recuerda que mañana es el día de velitas y vamos a celebrarlo a las 9pm.",
//   fecha: "2025-12-06"
// };

// // Generamos el resumen del mensaje.
// const resumen = generarResumen(mensaje);

// // Mostramos el resultado.
// console.log("Resumen del mensaje:", resumen);

// -------------------------------------------------------------------------------------------
// EJERCICIO 12
// -------------------------------------------------------------------------------------------

// // Definimos un arreglo de pacientes como ejemplo.
// const pacientes = [
//   { nombre: "Juan", prioridad: 2, edad: 30 },
//   { nombre: "Karol", prioridad: 3, edad: 25 },
//   { nombre: "Sebastián", prioridad: 3, edad: 40 }, // mismo nivel que Karol, pero mayor edad
//   { nombre: "Nicolle", prioridad: 1, edad: 50 }
// ];

// // Seleccionamos al paciente con mayor prioridad.
// const pacienteSeleccionado = seleccionarPaciente(pacientes);

// // Mostramos el resultado.
// console.log("Paciente seleccionado:", pacienteSeleccionado);

// -------------------------------------------------------------------------------------------
// EJERCICIO 13
// -------------------------------------------------------------------------------------------

// // Definimos un arreglo de gastos como ejemplo.
// const gastos = [
//   { categoria: "Alimentación", monto: 300 },
//   { categoria: "Transporte", monto: 150 },
//   { categoria: "Entretenimiento", monto: 200 },
//   { categoria: "Alimentación", monto: 250 },
//   { categoria: "Educación", monto: 400 }
// ];

// // Analizamos los gastos.
// const reporte = analizarGastos(gastos);

// // Mostramos el resultado.
// console.log("Reporte financiero:", reporte);

// -------------------------------------------------------------------------------------------
// EJERCICIO 14
// -------------------------------------------------------------------------------------------

// // Definimos un arreglo de proyectos como ejemplo.
// const proyectos = [
//   { nombre: "Plataforma Web", estado: "activo", participantes: ["Juan", "Karol", "Frank"] },
//   { nombre: "App Móvil", estado: "inactivo", participantes: ["Sebastian", "Jasser"] },
//   { nombre: "Sistema IT", estado: "activo", participantes: ["Nicolle"] }
// ];

// // 1. Filtrar proyectos activos
// const proyectosActivos = filtrarActivos(proyectos);
// console.log("Proyectos activos:", proyectosActivos);

// // 2. Contar participantes de cada proyecto activo
// proyectosActivos.forEach(p => {
//   console.log(`Proyecto: ${p.nombre}, Participantes: ${contarParticipantes(p)}`);
// });

// // 3. Evaluar proyectos con un callback
// // Ejemplo de regla: si tiene menos de 2 participantes, requiere refuerzo.
// const reglaRefuerzo = proyecto => proyecto.participantes.length < 2;

// const informes = proyectosActivos.map(p => evaluarProyecto(p, reglaRefuerzo));
// console.log("Informes finales:", informes);

// -------------------------------------------------------------------------------------------
// EJERCICIO 15
// -------------------------------------------------------------------------------------------

// // Definimos un arreglo de cursos completados por el aprendiz.
// const cursos = [
//   { nombre: "JavaScript Básico", calificacion: 50, horas: 40, intentos: 1, finalizado: true },
//   { nombre: "Python Básico", calificacion: 85, horas: 20, intentos: 2, finalizado: true },
//   { nombre: "SQL Intermedio", calificacion: 40, horas: 15, intentos: 3, finalizado: false },
//   { nombre: "Html Avanzado", calificacion: 90, horas: 10, intentos: 1, finalizado: true }
// ];

// // Ejemplo 1: Callback para recomendar cursos con calificación baja (< 60).
// const criterioRefuerzo = curso => curso.calificacion < 60 ? 3 : 0;

// // Ejemplo 2: Callback para recomendar cursos no finalizados.
// const criterioNoFinalizados = curso => !curso.finalizado ? 2 : 0;

// // Ejemplo 3: Callback para recomendar cursos con pocas horas (< 15) pero buena calificación (> 80).
// const criterioEficiencia = curso => (curso.horas < 15 && curso.calificacion > 80) ? 4 : 0;

// // Aplicamos los criterios
// console.log("Recomendaciones por refuerzo:", generarRecomendaciones(cursos, criterioRefuerzo));
// console.log("Recomendaciones por cursos no finalizados:", generarRecomendaciones(cursos, criterioNoFinalizados));
// console.log("Recomendaciones por eficiencia:", generarRecomendaciones(cursos, criterioEficiencia));

// -------------------------------------------------------------------------------------------
// EJERCICIO 16
// -------------------------------------------------------------------------------------------

// // Definimos un arreglo de usuarios como ejemplo.
// const usuarios = [
//   { id: 1, nombre: "Juan", publicaciones: ["inapropiado"], reportes: [1,2,3,4,5,6], fechaRegistro: "2025-11-20", estado: "activo" },
//   { id: 2, nombre: "Karol", publicaciones: ["normal"], reportes: [1,2], fechaRegistro: "2025-09-01", estado: "activo" },
//   { id: 3, nombre: "Frank", publicaciones: [], reportes: [1,2,3], fechaRegistro: "2025-12-01", estado: "activo" }
// ];

// // Definimos un callback de análisis de riesgo
// const callbackAnalisis = usuario => {
//   let nivel = 0;
//   let motivo = "Sin riesgo";

//   // Regla 1: más de 5 reportes = nivel mínimo 3
//   if (usuario.reportes.length > 5) {
//     nivel = 3;
//     motivo = "Más de 5 reportes";
//   }

//   // Regla 2: publicaciones inapropiadas aumentan riesgo
//   if (usuario.publicaciones.includes("inapropiado")) {
//     nivel = Math.max(nivel, 4);
//     motivo = "Publicaciones inapropiadas";
//   }

//   // Regla 3: usuario nuevo (< 30 días) con reportes aumenta riesgo
//   const diasDesdeRegistro = (Date.now() - new Date(usuario.fechaRegistro).getTime()) / (1000 * 60 * 60 * 24);
//   if (diasDesdeRegistro < 30 && usuario.reportes.length > 0) {
//     nivel = Math.max(nivel, 5);
//     motivo = "Usuario nuevo con reportes";
//   }

//   return {
//     sospechoso: nivel > 0,
//     nivel,
//     motivo
//   };
// };

// // Ejecutamos el análisis
// const reporte = analizarUsuarios(usuarios, callbackAnalisis);

// // Mostramos el resultado
// console.log("Informe global:", reporte.informe);
// console.log("Detalle de usuarios:", reporte.detalle);

// -------------------------------------------------------------------------------------------
// EJERCICIO 17
// -------------------------------------------------------------------------------------------

// // Inventario de ejemplo
// const inventario = [
//   { id: 1, nombre: "Leche", categoria: "Lácteos", stock: 10, precio: 2.5, perecedero: true, fechaVencimiento: "2025-12-10" },
//   { id: 2, nombre: "Arroz", categoria: "Granos", stock: 50, precio: 1.2, perecedero: false },
//   { id: 3, nombre: "Carne", categoria: "Cárnicos", stock: 5, precio: 8.0, perecedero: true, fechaVencimiento: "2025-12-08" },
//   { id: 4, nombre: "Pan", categoria: "Panadería", stock: 20, precio: 1.5, perecedero: true, fechaVencimiento: "2025-12-07" }
// ];

// // Callback de control: ejemplo de regla personalizada
// const reglaControl = producto => {
//   if (producto.stock < 10) return "retirar";
//   if (producto.perecedero) return "vigilar";
//   if (producto.precio > 5) return "ajustar precio";
//   return "estable";
// };

// // Procesamos el inventario
// const reporte = procesarInventario(inventario, reglaControl);

// // Mostramos el informe
// console.log("Informe completo del inventario:", reporte);