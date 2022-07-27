/*
    ===== Código de TypeScript =====
*/
//para definir tipos de valor dentro de un array, dentro de una interfaz,
//declarar los atributos dentro del array en otra interfaz previamente
interface Direccion {
  numero: number;
  calle: string;
  pais: string;
  ciudad: string;
}

interface superHeroe {
  nombre: string;
  edad: number;
  //referenciar interfaz previa en el atributo que contiene el array
  direccion: Direccion;
  //definir el tipo de valor que devolvera la funcion
  mostrarDireccion: () => string;
}
//tambien es posible declararlo dentro de la propia direccion anidado con {},
//tal y como declarado en la constante, pero es mas correcto hacerlo como un elemento aparte

const superHeroe: superHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    numero: 4,
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
