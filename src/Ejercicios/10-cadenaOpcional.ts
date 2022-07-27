/*
    ===== Código de TypeScript =====
*/
//encadenamiento opcional

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Ferbanando",
};

const pasajero2: Pasajero = {
  nombre: "Melisa",
  hijos: ["Natalia", "Gabriel"],
};

//la interrogacion valora si tiene o no que devolver un valor
function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length;
  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
