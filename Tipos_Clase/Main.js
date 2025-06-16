"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee2_1 = require("./Employee2");
var empleado = new Employee2_1.Empleado("carlos", 24, true, "Desarrollador Senior");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre", empleado.nombre);
