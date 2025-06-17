let nombre1: string = "carlosh"

console.log(nombre1.length);

function obtenerLength <T extends { length: number}> (obj: T): number {
    let longitud : number = obj.length;
    let tipo: string = typeof obj;
    console.log(`el tipo de dato es ${tipo} y la longitud es : ${longitud}`);
    return obj.length
}

obtenerLength("hola")
obtenerLength([1, 2, 3, 4, 5])

// console.log(obtenerLength(42)); // no se puede manejar ya que el tipo de dato numerico, no tiene la propiedad length, por lo cual no se puede aplicar la funcion
