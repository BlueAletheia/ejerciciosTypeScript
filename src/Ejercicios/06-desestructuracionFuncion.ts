/*
    ===== Código de TypeScript =====
*/

//desestructuracion de argumentos en una funcion

export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  desc: "Ipad Air",
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  //al colocar {precio} dentro de () (antes producto), ahora en la linea 27 puede aparecer precio en vez de producto.precio
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
}
/*
const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);
console.log("Total", total);
console.log("ISV", isv);
*/
