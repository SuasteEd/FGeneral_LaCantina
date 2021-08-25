var a = prompt("Valor de a");
var b = prompt("Valor de b");
var c = prompt("Valor de c");

var solucion1 = (((-1)*b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
var solucion2 = (((-1)*b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
alert("x1: " + solucion1);
alert("x2: " + solucion2);
