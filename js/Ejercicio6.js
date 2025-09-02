/*
6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande
*/

//6 - Mostrar el mayor de dos números

let a = parseInt(prompt("Ingrese el primer numero:"));
let b = parseInt(prompt("Ingrese el segundo numero:"));

if (a > b) {
  document.writeln("El " + a + " es el numero mas grande <br>");
} else {
  document.writeln("El " + b + " es el numero mas grande <br>");
}
