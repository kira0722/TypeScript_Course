export class Persona {
    name: string;
    age: number;
    isDeveloper: boolean;

    constructor(name: string, age: number, isDeveloper: boolean) {
        this.name = name
        this.age = age
        this.isDeveloper = isDeveloper
    }

    great(): string {
        return `Hola, mi nombre es: ${this.name}, y tengo ${this.age} años`;
    }
}

