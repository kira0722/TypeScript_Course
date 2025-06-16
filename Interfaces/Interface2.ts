interface Direction {
    street : string,
    phone : number,
    city?: string
}

let direction : Direction = {
    street : "calle 21 3",
    phone : 12312,
    // city : "macaigo"
}

console.log("this is your direction; ",direction);

//read only

interface Personas {
    readonly name : string;
    readonly age : number;
    readonly isDevelopers : boolean;
};

let personaRead : Personas = {
    name : "carlos",
    age : 32,
    isDevelopers : true
}

console.log("PERSONA: ", personaRead);

//error
// personaRead.name = "perdro"

//Interfaz extendida 

interface Employee extends Personas {
    readonly puesto : string
}

let empleadoRead : Employee = {
    name: "carlitos",
    age: 42,
    isDevelopers: true,
    puesto: "Senior"
}

console.log("Empleado: ", empleadoRead);