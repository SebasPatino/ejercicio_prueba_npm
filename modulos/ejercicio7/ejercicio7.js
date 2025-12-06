// Definimos la función registrarProductos que recibe un número indefinido de parámetros.
export function registrarProductos(...productos) {
  // Creamos un arreglo vacío donde iremos almacenando los productos únicos.
  const listaFinal = [];

  // Recorremos cada producto recibido en el parámetro rest.
  for (let producto of productos) {
    // Validamos si el producto ya existe en listaFinal usando includes().
    // includes() devuelve true si el elemento ya está presente.
    if (!listaFinal.includes(producto)) {
      // Si NO existe, lo agregamos al arreglo.
      listaFinal.push(producto);
    }
    // Si ya existe, simplemente lo ignoramos.
  }

  // Retornamos el arreglo final con productos únicos.
  return listaFinal;
}