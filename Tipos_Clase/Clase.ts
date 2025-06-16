export class Persona1 {
    public name: string; //es accesible desde cualquier parte
    public age: number; // accesible desde la clase y sus subclases
    private isDeveloper: boolean; // accesible solo desde la clase

    constructor(name: string, age: number, isDeveloper: boolean) {
        this.name = name
        this.age = age
        this.isDeveloper = isDeveloper
    }

    public great(): string {
        
        return `Hola, mi nombre es: ${this.name}, y tengo ${this.age} años`;
    }

    public getAge(): number {
        return this.age
    }

    private isDev(): boolean {
        return this.isDeveloper
    }
}

