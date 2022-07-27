/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  ano: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    ano: 2015,
  },
};

//const autor = 'Fulano;'

//desestructuracion: sirve para poder omitir el reproductor. antes de referenciar atributos del objeto
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

/*
console.log("El volumen actual es de ", vol);
console.log("El segundo actual es de ", segundo);
console.log("La cancion actual es ", cancion);
console.log("El autor es ", detalles.autor);
*/

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = dbz;
//arreglos: reasignan el valor de la constante de arriba con respecto a la posicion de ambas dentro del grupo
//se puede dejar como [ , , p3] para reasignar solo el valor de la posicion 3

console.log("Personaje 1:", dbz[0]);
console.log("Personaje 2:", dbz[1]);
console.log("Personaje 3:", p3);
