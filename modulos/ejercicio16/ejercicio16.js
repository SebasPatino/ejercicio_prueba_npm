// Función principal analizarUsuarios
// Recibe:
// - usuarios: arreglo de objetos con { id, nombre, publicaciones, reportes, fechaRegistro, estado }
// - callback: función que define la lógica de análisis y retorna { sospechoso, nivel, motivo }

export function analizarUsuarios(usuarios, callback) {
  // 1. Aplicamos el callback a cada usuario con map()
  const resultados = usuarios.map(usuario => {
    const analisis = callback(usuario);
    return {
      ...usuario,
      ...analisis // añadimos sospechoso, nivel y motivo
    };
  });

  // 2. Clasificamos los usuarios por nivel de riesgo
  const informe = {
    bajoRiesgo: [],
    medioRiesgo: [],
    altoRiesgo: []
  };

  resultados.forEach(usuario => {
    if (!usuario.sospechoso) {
      return; // ignoramos usuarios no sospechosos
    }

    if (usuario.nivel <= 2) {
      informe.bajoRiesgo.push(usuario);
    } else if (usuario.nivel <= 3) {
      informe.medioRiesgo.push(usuario);
    } else {
      informe.altoRiesgo.push(usuario);
    }
  });

  // 3. Retornamos el informe completo
  return {
    informe,
    detalle: resultados
  };
}