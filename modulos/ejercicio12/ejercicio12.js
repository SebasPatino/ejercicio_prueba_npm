// Función seleccionarPaciente que recibe un arreglo de pacientes.
// Cada paciente es un objeto con atributos: nombre, prioridad y edad.
// Requisitos:
// - Buscar el paciente con mayor prioridad.
// - Resolver empates por edad (mayor edad gana).
// - Retornar el paciente seleccionado.

export function seleccionarPaciente(pacientes) {
  // Validamos que el arreglo no esté vacío.
  if (pacientes.length === 0) {
    return null; // Si no hay pacientes, retornamos null.
  }

  // Inicializamos el paciente seleccionado con el primero de la lista.
  let pacienteSeleccionado = pacientes[0];

  // Recorremos el resto de pacientes.
  for (let i = 1; i < pacientes.length; i++) {
    const pacienteActual = pacientes[i];

    // Si el paciente actual tiene mayor prioridad, lo seleccionamos.
    if (pacienteActual.prioridad > pacienteSeleccionado.prioridad) {
      pacienteSeleccionado = pacienteActual;
    } 
    // Si tienen la misma prioridad, resolvemos por edad.
    else if (
      pacienteActual.prioridad === pacienteSeleccionado.prioridad &&
      pacienteActual.edad > pacienteSeleccionado.edad
    ) {
      pacienteSeleccionado = pacienteActual;
    }
  }

  // Retornamos el paciente con mayor prioridad (y mayor edad en caso de empate).
  return pacienteSeleccionado;
}