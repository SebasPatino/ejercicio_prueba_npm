// Función principal procesarInventario
// Recibe:
// - inventario: arreglo de productos { id, nombre, categoria, stock, precio, perecedero, fechaVencimiento }
// - callback: función que define la acción sugerida para cada producto
// Retorna un informe completo con clasificación, alertas y cálculos.

export function procesarInventario(inventario, callback) {
  // 1. Aplicamos el callback a cada producto y clasificamos por acción
  const clasificacion = {};
  const productosProcesados = inventario.map(producto => {
    const accion = callback(producto);
    if (!clasificacion[accion]) {
      clasificacion[accion] = [];
    }
    clasificacion[accion].push(producto);

    return { ...producto, accion };
  });

  // 2. Encontrar producto con menor y mayor stock
  let productoMenorStock = inventario[0];
  let productoMayorStock = inventario[0];

  for (let producto of inventario) {
    if (producto.stock < productoMenorStock.stock) {
      productoMenorStock = producto;
    }
    if (producto.stock > productoMayorStock.stock) {
      productoMayorStock = producto;
    }
  }

  // 3. Subreporte de productos perecederos próximos a vencer (menos de 7 días)
  const hoy = new Date();
  const alertasPerecederos = inventario.filter(p => {
    if (p.perecedero && p.fechaVencimiento) {
      const diasRestantes = (new Date(p.fechaVencimiento) - hoy) / (1000 * 60 * 60 * 24);
      return diasRestantes <= 7;
    }
    return false;
  });

  // 4. Resumen por categoría
  const resumenCategorias = {};
  for (let producto of inventario) {
    if (!resumenCategorias[producto.categoria]) {
      resumenCategorias[producto.categoria] = 0;
    }
    resumenCategorias[producto.categoria]++;
  }

  // 5. Valor económico total del inventario usando reduce()
  const valorTotal = inventario.reduce((acc, p) => acc + (p.stock * p.precio), 0);

  // 6. Retornamos el informe completo
  return {
    productosProcesados,
    clasificacion,
    productoMenorStock,
    productoMayorStock,
    alertasPerecederos,
    resumenCategorias,
    valorTotal
  };
}