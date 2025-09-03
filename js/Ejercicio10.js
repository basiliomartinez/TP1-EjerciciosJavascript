/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2.*/

/*const numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  document.write("El " + numero + " es divisible por 2, 3, 5 o 7<br>");
} else {
  document.write("El " + numero + " no es divisible por 2, 3, 5 ni 7<br>");
}*/

const numero = parseInt(prompt("Ingrese un numero"));

if (
  numero % 2 === 0 ||
  numero % 3 === 0 ||
  numero % 5 === 0 ||
  numero % 7 === 0
) {
  document.writeln("El " + numero + " es divisible por 2,3,5,7");
}else{
      document.writeln("El " + numero + " NO es divisible por 2,3,5,7");
}
