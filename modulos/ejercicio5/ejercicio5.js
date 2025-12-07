// Función validarUsuario
// Recibe un objeto usuario con { nombre, estado, rol }.
// Evalúa si el usuario está activo y asigna permisos según su rol.
// Retorna un mensaje con el nivel de acceso.

export function validarUsuario(usuario) {
  const { nombre, estado, rol } = usuario; // destructuring para extraer datos

  // Verificamos si el usuario está activo
  if (estado !== "activo") {
    return `Acceso denegado para ${nombre}. Usuario inactivo.`;
  }

  // Evaluamos el rol con condicionales
  if (rol === "admin") {
    return `Acceso permitido para ${nombre}. Permisos: control total del sistema.`;
  } else if (rol === "editor") {
    return `Acceso permitido para ${nombre}. Permisos: edición de contenido.`;
  } else if (rol === "lector") {
    return `Acceso permitido para ${nombre}. Permisos: solo lectura.`;
  } else {
    return `Acceso denegado para ${nombre}. Rol desconocido.`;
  }
}