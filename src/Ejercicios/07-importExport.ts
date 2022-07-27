/*
    ===== Código de TypeScript =====
*/

//importaciones y exportaciones

import { calculaISV, Producto } from "./06-desestructuracionFuncion";

//se podria copiar del ejercicio 06 el primer bloque de codigo,
//en vez de eso colocamos export previo al bloque en el otro archivo
//y al colocar el cursor sobre el error que genera 'Producto',
//da la opcion de autocompletar la linea import, que se coloca en la parte superior del doc.
//de esta manera, el archivo se mantiene siempre actualizado ante cambios

const carritoCompras: Producto[] = [
  {
    desc: "Telefono 1",
    precio: 100,
  },
  {
    desc: "Telefono 2",
    precio: 150,
  },
];

const [total, isv] = calculaISV(carritoCompras);
console.log("Total", total);
console.log("ISV", isv);
