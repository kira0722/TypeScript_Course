let nombres: string[] = ["carlos", "carlitos", "pedro"];
console.log(nombres);

let edades: number[] = [12, 13, 14];
console.log("Edades: ", edades);

let mixto: any[] = ["carlos", 13, true];
console.log("hola mixto: ", mixto);

interface Persona {
  nombre: string;
  edad: number;
  isDeveloper: boolean;
}

let personas: Persona[] = [
  { nombre: "carlos", edad: 32, isDeveloper: true },
  { nombre: "carlitos", edad: 38, isDeveloper: false },
  { nombre: "juan", edad: 28, isDeveloper: false },
];

console.log("Personas: ", personas);

personas.push({ nombre: "pedrito", edad: 67, isDeveloper: true });
console.log(`personas`, personas);

//tupla

let personasTupla: [string, number, boolean];
personasTupla = ["carlitos", 30, false];
console.log("tupla", personasTupla);

let personTupla: [string, number, boolean][] = [];

personTupla.push(["carlos", 90, true]);
personTupla.push(["pedrito", 65, false]);
personTupla.push(["pedrito2", 68, false]);

personTupla.forEach((persona) => {
  console.log("persona", persona);

  let nombre: string = persona[0];
  let edad: number = persona[1];
  let isDeveloper: boolean = persona[2];

  console.log("", nombre);
  console.log("", edad);
  console.log("", isDeveloper);
});


//enumeradores

enum dayWeek {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
let dia : dayWeek = dayWeek.Miercoles
console.log("dia: ", dayWeek[dia]);
