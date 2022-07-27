/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

// una interfaz es un modelo
interface PersonajeLOR {
  //contiene atributos como variables
  //define el tipo de dato de los atributos
  nombre: string;
  hp: number;
  // o como funciones
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.hp += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Strider",
  hp: 50,
  mostrarHp() {
    console.log("Puntos de vida:", this.hp);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();

//

//const resultado = multiplicar(10,0, 40);
//console.log(resultado);
