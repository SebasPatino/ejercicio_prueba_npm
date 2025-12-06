// Función generarResumen que recibe un objeto mensaje.
// Usamos destructuring para extraer remitente, contenido y fecha directamente.
export function generarResumen(mensaje) {
  // Destructuring: obtenemos las propiedades necesarias del objeto mensaje.
  const { remitente, contenido, fecha } = mensaje;

  // Creamos un contenido breve usando slice() en lugar de substring().
  // slice(0, 20) devuelve los primeros 20 caracteres del contenido.
  const contenidoBreve = contenido.length > 20 
    ? contenido.slice(0, 20) + "..." 
    : contenido;

  // Construimos el resumen como un nuevo objeto.
  const resumen = {
    remitente,
    contenido: contenidoBreve,
    fecha
  };

  // Retornamos el resumen.
  return resumen;
}