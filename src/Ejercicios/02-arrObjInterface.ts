/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["bash", "counter", "healing"];
habilidades.push();

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

let personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["bash", "counter", "healing"],
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
