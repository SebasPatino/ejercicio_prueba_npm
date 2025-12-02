import nombre from "prompt-sync";

// Importamos las funciones
import { calcularSalarioBase, calcularDeducciones, calcularNeto } from "./modulos/index.js";


const intro = nombre();

const prompt = nombre();

// ===============================
// Aquí conectamos todos los módulos
// ===============================

// Entradas (ejemplo)
const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));
const horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas: "));

// Proceso modular
const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
const deducciones = calcularDeducciones(salarioBase);
const salarioNeto = calcularNeto(salarioBase, deducciones);

// Salidas
console.log(`
    Salario Base: $${salarioBase}
    Deducciones: $${deducciones}
    Salario Neto: $${salarioNeto}`);
