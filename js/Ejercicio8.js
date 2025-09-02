/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */

let num = parseInt(prompt("Ingrese un numero:"));

if (num % 2 === 0) {
  document.writeln("El " + num + " es divisible por 2");
} else {
      document.writeln("El " + num + " no es divisible por 2");
}

/*
Paso a paso
prompt pide el número y parseInt lo convierte a número entero.
La condición num % 2 === 0 comprueba si el resto de dividir el número por 2 es 0.
Si se cumple → if = verdadero → imprime que sí es divisible.
Si no se cumple → else = falso → imprime que no es divisible.
*/