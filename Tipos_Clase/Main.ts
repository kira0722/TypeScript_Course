import { Empleado } from "./Employee2";

let empleado = new Empleado("carlos", 24, true, "Desarrollador Senior")

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre", empleado.nombre);