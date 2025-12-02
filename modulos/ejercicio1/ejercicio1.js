// ===============================
// Función para calcular el salario base de un trabajador
// Entradas: valorHora (número), horasTrabajadas (número)
// Salida: salario base (número)
// ===============================

// Exportamos la función para que pueda ser usada en otros módulos
export function calcularSalarioBase(valorHora, horasTrabajadas) {
    // Multiplicamos el valor de la hora por las horas trabajadas
    return valorHora * horasTrabajadas;
}

// ===============================
// Función para calcular las deducciones del salario
// Entradas: salarioBase (número)
// Salida: total de deducciones (número)
// ===============================

// Exportamos la función para que pueda ser usada en otros módulos
export function calcularDeducciones(salarioBase) {
    // Definimos un porcentaje fijo de deducción (ejemplo: 10%)
    const porcentajeDeduccion = 0.10;

    // Calculamos el valor de la deducción
    return salarioBase * porcentajeDeduccion;
}

// ===============================
// Función para calcular el salario neto
// Entradas: salarioBase (número), deducciones (número)
// Salida: salario neto (número)
// ===============================

// Exportamos la función para que pueda ser usada en otros módulos
export function calcularNeto(salarioBase, deducciones) {
    // Restamos las deducciones al salario base
    return salarioBase - deducciones;
}