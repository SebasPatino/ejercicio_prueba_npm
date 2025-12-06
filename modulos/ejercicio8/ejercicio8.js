// Definimos la función buscarCursos que recibe:
// 1. catalogo: un arreglo de objetos (cada objeto representa un curso).
// 2. callback: una función que define el criterio de búsqueda.
// En esta versión NO usamos filter(), sino un bucle manual.
export function buscarCursos(catalogo, callback) {
  // Creamos un arreglo vacío para almacenar los cursos que cumplen el criterio.
  const cursosFiltrados = [];

  // Recorremos el catálogo curso por curso.
  for (let curso of catalogo) {
    // Ejecutamos el callback sobre cada curso.
    // Si el callback devuelve true, significa que el curso cumple el criterio.
    if (callback(curso)) {
      // Agregamos el curso al arreglo de resultados.
      cursosFiltrados.push(curso);
    }
  }

  // Retornamos el arreglo final con los cursos filtrados.
  return cursosFiltrados;
}