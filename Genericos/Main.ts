function identity<T>(arg: T): T {
    return arg
}

let output1 = identity<string>("Hello")
console.log("output1: ",output1);

let output2 = identity<number>(43)
console.log("output2: ",output2);


class Caja<T> {
    private contenido: T

    constructor(contenido: T) {
        this.contenido = contenido
    }

    public obtenerContenido(): T {
        return this.contenido
    }
}

let cajaString = new Caja<string>("Libros")
console.log("Contenido de la caja de string: ", cajaString.obtenerContenido());

let cajaBoolean = new Caja<boolean>(true)
console.log("contenido boolean; ", cajaBoolean.obtenerContenido());

let cajaNumber = new Caja<number>(21)
console.log("caja number: ", cajaNumber.obtenerContenido());

let obj1: string[] = ["carlitos", "pedrito", "sancho"]

let cajaObj = new Caja<[string[]]>([obj1])
console.log("Caja objeto: ", cajaObj);