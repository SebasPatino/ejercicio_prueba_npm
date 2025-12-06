// Creamos una función llamada calcularPromedio
// La función recibe como parámetro un arreglo llamado "notas".

export function calcularPromedio(notas) {
    // Usamos el método reduce() para recorrer el arreglo "notas".
    const suma = notas.reduce((acc, nota) => acc + nota, 0);

    // Calculamos el promedio dividiendo la suma total entre la cantidad de notas.
    // notas.length nos da el número de elementos en el arreglo.
    return suma / notas.length;
}