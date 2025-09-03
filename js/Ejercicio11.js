/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7*/

const numero = parseInt(prompt("Ingrese un numero:"));
const mensaje = "El " + numero + " es divisible por: ";
let divisible = false;

if (numero % 2 === 0) {
  document.writeln(mensaje + "2<br>");
  divisible = true;
}
if (numero % 3 === 0) {
  document.writeln(mensaje + "3<br>");
  divisible = true;
}
if (numero % 5 === 0) {
  document.writeln(mensaje + "5<br>");
  divisible = true;
}
if (numero % 7 === 0) {
  document.writeln(mensaje + "7<br>");
  divisible = true;
}

if (!divisible) {
  document.writeln("El " + numero + " NO es divisible por 2,3,5,7 <br>");
}
