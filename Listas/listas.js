var nombres = ["carlos", "carlitos", "pedro"];
console.log(nombres);
var edades = [12, 13, 14];
console.log("Edades: ", edades);
var mixto = ["carlos", 13, true];
console.log("hola mixto: ", mixto);
var personas = [
    { nombre: "carlos", edad: 32, isDeveloper: true },
    { nombre: "carlitos", edad: 38, isDeveloper: false },
    { nombre: "juan", edad: 28, isDeveloper: false },
];
console.log("Personas: ", personas);
personas.push({ nombre: "pedrito", edad: 67, isDeveloper: true });
console.log("personas", personas);
//tupla
var personasTupla;
personasTupla = ["carlitos", 30, false];
console.log("tupla", personasTupla);
var personTupla = [];
personTupla.push(["carlos", 90, true]);
personTupla.push(["pedrito", 65, false]);
personTupla.push(["pedrito2", 68, false]);
personTupla.forEach(function (persona) {
    console.log("persona", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var isDeveloper = persona[2];
    console.log("", nombre);
    console.log("", edad);
    console.log("", isDeveloper);
});
//enumeradores
var dayWeek;
(function (dayWeek) {
    dayWeek[dayWeek["Lunes"] = 0] = "Lunes";
    dayWeek[dayWeek["Martes"] = 1] = "Martes";
    dayWeek[dayWeek["Miercoles"] = 2] = "Miercoles";
    dayWeek[dayWeek["Jueves"] = 3] = "Jueves";
    dayWeek[dayWeek["Viernes"] = 4] = "Viernes";
    dayWeek[dayWeek["Sabado"] = 5] = "Sabado";
    dayWeek[dayWeek["Domingo"] = 6] = "Domingo";
})(dayWeek || (dayWeek = {}));
var dia = dayWeek.Miercoles;
console.log("dia: ", dayWeek[dia]);
