// Función para filtrar proyectos activos.
// Recibe un arreglo de proyectos y retorna solo los que tienen estado "activo".
export function filtrarActivos(proyectos) {
  return proyectos.filter(proyecto => proyecto.estado === "activo");
}

// Función para contar participantes de un proyecto.
// Recibe un proyecto y retorna el número de participantes.
export function contarParticipantes(proyecto) {
  return proyecto.participantes ? proyecto.participantes.length : 0;
}

// Función para evaluar un proyecto mediante un callback.
// El callback define la regla de evaluación (ej: si requiere refuerzo).
export function evaluarProyecto(proyecto, callback) {
  // Ejecutamos el callback sobre el proyecto.
  const requiereRefuerzo = callback(proyecto);

  // Retornamos un informe con el estado final.
  return {
    nombre: proyecto.nombre,
    estado: proyecto.estado,
    participantes: proyecto.participantes.length,
    refuerzo: requiereRefuerzo ? "Requiere refuerzo" : "En buen estado"
  };
}