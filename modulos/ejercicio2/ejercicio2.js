// La función recibe tres parámetros:
// - cantidadInicial: número de unidades disponibles al inicio.
// - cantidadVendida: número de unidades que se vendieron.
// - cantidadRecibida: número de unidades que se recibieron (reabastecimiento).
export function calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida) {
    try {
        // Validamos que los valores no sean negativos.
        // Si alguno de los parámetros es menor que 0, lanzamos un error.
        if (cantidadInicial < 0 || cantidadVendida < 0 || cantidadRecibida < 0) {
        throw new Error("Error: No se permiten valores negativos.");
        }

        // Calculamos el inventario final aplicando la fórmula:
        // inventarioFinal = cantidadInicial - cantidadVendida + cantidadRecibida
        const inventarioFinal = cantidadInicial - cantidadVendida + cantidadRecibida;

        // Verificamos si el inventario es crítico.
        // Si el inventario final es menor a 5 unidades, se considera crítico.
        if (inventarioFinal < 5) {
        return `Inventario final: ${inventarioFinal} unidades. Inventario crítico.`;
        } else {
        // Si no es crítico, se considera estable.
        return `Inventario final: ${inventarioFinal} unidades. Inventario estable.`;
        }
        } catch (error) {
        // Capturamos el error y lo retornamos
        return error.message;
    }
}
