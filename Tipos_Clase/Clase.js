"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona12 = void 0;
var Persona12 = /** @class */ (function () {
    function Persona12(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona12.prototype.saludar = function () {
        this.esDev;
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    Persona12.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona12.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return Persona12;
}());
exports.Persona12 = Persona12;
