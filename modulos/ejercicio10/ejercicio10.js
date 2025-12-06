// Función para fusionar usuarios de dos sistemas distintos.
// Requisitos:
// - Usar operador spread (...)
// - Validar duplicados por documento
// - Conservar la versión con mayor información (más atributos definidos)

export function fusionarUsuarios(usuariosA, usuariosB) {
  // Fusionamos las dos listas en una sola usando el operador spread.
  const fusionInicial = [...usuariosA, ...usuariosB];

  // Creamos un objeto auxiliar para almacenar usuarios únicos por documento.
  const mapaUsuarios = {};

  // Recorremos la lista fusionada.
  for (let usuario of fusionInicial) {
    const documento = usuario.documento;

    // Si el usuario con ese documento no existe aún en el mapa, lo agregamos.
    if (!mapaUsuarios[documento]) {
      mapaUsuarios[documento] = usuario;
    } else {
      // Si ya existe, comparamos cuál versión tiene más información.
      const usuarioExistente = mapaUsuarios[documento];

      // Contamos los atributos definidos en cada objeto.
      const atributosExistente = Object.keys(usuarioExistente).length;
      const atributosNuevo = Object.keys(usuario).length;

      // Conservamos el que tenga más atributos (más información).
      if (atributosNuevo > atributosExistente) {
        mapaUsuarios[documento] = usuario;
      }
    }
  }

  // Retornamos la lista depurada (solo valores únicos del mapa).
  return Object.values(mapaUsuarios);
}