function PersonaDec(target: Function) {
  console.log(target);

  target.prototype.despedir = function (despedida: string) {
    return `${despedida}, ${this.nombre}`;
  };
}

@PersonaDec
class Person2 {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }

  despedir!: (despedida: string) => string;
}

let usuario = new Person2("carlitos", 45);
console.log(usuario);
console.log(usuario.saludar("hola"));
console.log(usuario.despedir("adios"));