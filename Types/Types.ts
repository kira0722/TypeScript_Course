type PersonaType = {
    nombre: string,
    edad: number
}

type Parcial<T> = {
    [k in keyof T]?: T[k]
}

type PersonaParcial = Parcial<PersonaType>


type SoloLectura<T> = {
    readonly [k in keyof T]: T[k]
}

type PersonaLectura = SoloLectura<PersonaType>

let Persona: PersonaLectura = {
    nombre: "carlitos",
    edad: 32
}

console.log(Persona);

// class PersonaClass {
//     nombre: string
//     edad: number

//     constructor (nombre: string, edad: number) {
//         this.nombre = nombre
//         this.edad = edad
//     }
// }



//template literal types

type Variantes = "little" | "middle" | "big"
type ClasesCss = `boton-${Variantes}`

let botonP: ClasesCss = "boton-little"
let botonM: ClasesCss = "boton-middle"
let botonB: ClasesCss = "boton-big"

console.log(botonP);

//Conditional types

type isNumber<T> = T extends number ? true : false

function isNumber<T>(valor: T): isNumber<T> {
    return (typeof valor === 'number') as isNumber<T>
}

const result1 = isNumber(42)
const result2 = isNumber("hello")

console.log(result1);
console.log(result2);