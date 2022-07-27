/*
    ===== Código de TypeScript =====
*/

//clases en typescript

// private: solo se puede ver dentro de la clase
//public: se puede ver desde fuera de la clase
//static: se puede acceder desde fuera de la clase

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  /*
  alterEgo: string;
  edad: number;
  nombreReal: number;
*/
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "NY, USA");
    //this, (alterEgo = alterEgo);
  }
  //   imprimirNombre() {
  //     return this.alterEgo + " " + this.nombreReal;
  //   }
}

//diferencia entre class e interface es que las clases permiten crear instancias (( const spiderman:Heroe = ()))
//en una clase se pueden implementar metodos
//las interfaces son como clases tontas, no se puede implementar
//solo se puede definir

const ironman = new Heroe("Ironman", 45, "Tony Stark");

console.log(ironman);

//extender clases: se puede anidar una clase dentro de otra añadiendo junto al class nombre1 extend nombre2
