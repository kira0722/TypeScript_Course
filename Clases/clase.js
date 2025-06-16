"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
    Persona.prototype.great = function () {
        return "Hola, mi nombre es: ".concat(this.name, ", y tengo ").concat(this.age, " a\u00F1os");
    };
    return Persona;
}());
exports.Persona = Persona;
