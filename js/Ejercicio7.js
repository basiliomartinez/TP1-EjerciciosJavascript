/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
 */

//7 - Mostrar el mayor de tres números

let n1 = parseInt(prompt("Ingrese el primer numero:"));
let n2 = parseInt(prompt("Ingrese el segundo numero:"));
let n3 = parseInt(prompt("Ingrese el tercer numero:"));

if (n1 >= n2 && n1 >= n3) {
  document.writeln("El " + n1 + " es el numero mas grande");
} else if (n2 >= n1 && n2 >= n3) {
  document.writeln("El " + n2 + " es el numero mas grande");
} else {
  document.writeln("El " + n3 + " es el numero mas grande");
}
