// Función principal generarRecomendaciones
// Recibe:
// - cursos: arreglo de objetos con { nombre, calificacion, horas, intentos, finalizado }
// - callback: función que define la lógica de recomendación y retorna un número de prioridad (0 = no recomendado)

export function generarRecomendaciones(cursos, callback) {
  // 1. Usamos map() para aplicar el callback a cada curso y añadir la prioridad y explicación.
  const cursosConPrioridad = cursos.map(curso => {
    const prioridad = callback(curso); // el callback define la lógica
    return {
      ...curso,
      prioridad,
      explicacion: prioridad > 0 
        ? `Curso recomendado con prioridad ${prioridad} según el criterio.` 
        : "No recomendado por el criterio."
    };
  });

  // 2. Filtramos solo los cursos con prioridad mayor a 0.
  const cursosFiltrados = cursosConPrioridad.filter(curso => curso.prioridad > 0);

  // 3. Ordenamos de mayor a menor prioridad.
  const cursosOrdenados = cursosFiltrados.sort((a, b) => b.prioridad - a.prioridad);

  // 4. Retornamos la lista final de recomendaciones.
  return cursosOrdenados;
}