// Función analizarGastos que recibe un arreglo de objetos de gastos.
// Cada gasto tiene: { categoria, monto }.
// Requisitos:
// - Calcular el total gastado.
// - Sumar montos por categoría.
// - Identificar la categoría más costosa.
// - Detectar si alguna categoría supera el 40% del gasto total.

export function analizarGastos(gastos) {
  // Objeto para acumular los montos por categoría.
  const resumenPorCategoria = {};

  // Variable para el total gastado.
  let totalGastado = 0;

  // Recorremos todos los gastos.
  for (let gasto of gastos) {
    const { categoria, monto } = gasto;

    // Sumamos al total.
    totalGastado += monto;

    // Acumulamos por categoría.
    if (!resumenPorCategoria[categoria]) {
      resumenPorCategoria[categoria] = 0;
    }
    resumenPorCategoria[categoria] += monto;
  }

  // Identificamos la categoría más costosa.
  let categoriaMasCostosa = null;
  let montoMasAlto = 0;

  for (let categoria in resumenPorCategoria) {
    if (resumenPorCategoria[categoria] > montoMasAlto) {
      montoMasAlto = resumenPorCategoria[categoria];
      categoriaMasCostosa = categoria;
    }
  }

  // Detectamos alertas de desbalance financiero (categoría > 40% del total).
  const alertas = [];
  for (let categoria in resumenPorCategoria) {
    const porcentaje = (resumenPorCategoria[categoria] / totalGastado) * 100;
    if (porcentaje > 40) {
      alertas.push(`La categoría "${categoria}" supera el 40% del gasto total (${porcentaje.toFixed(2)}%).`);
    }
  }

  // Retornamos el reporte financiero como objeto.
  return {
    totalGastado,
    categoriaMasCostosa,
    resumenPorCategoria,
    alertas
  };
}