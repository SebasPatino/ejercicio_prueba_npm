// Definimos la función procesarPagos que recibe:
// 1. pagos: un arreglo de objetos (cada objeto representa un pago).
// 2. callback: una función que define las reglas de aprobación.
// La función recorre cada pago y lo marca como "aprobado" o "rechazado".
export function procesarPagos(pagos, callback) {
  // Creamos un nuevo arreglo para almacenar los resultados.
  const resultado = [];

  // Recorremos cada pago recibido.
  for (let pago of pagos) {
    // Ejecutamos el callback sobre el pago.
    // El callback devuelve true si el pago cumple las condiciones de aprobación.
    const aprobado = callback(pago);

    // Creamos un nuevo objeto con el estado del pago.
    resultado.push({
      ...pago,               // copiamos los datos originales del pago
      estado: aprobado ? "Aprobado" : "Rechazado" // añadimos el estado
    });
  }

  // Retornamos el listado final con todos los pagos procesados.
  return resultado;
}