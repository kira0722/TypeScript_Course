export class Usuario {
    name: string;
    email: string;
    profession: string;
    trayectory: number;
    isActive: boolean;

    constructor(
        name: string,
        email: string,
        profession: string,
        trayectory: number,
        isActive: boolean
    ) {
        this.name = name;
        this.email = email;
        this.profession = profession;
        this.trayectory = trayectory;
        this.isActive = isActive;
    }

    getName(): string {
        return this.name
    }

    getProfile(): string {
        return `User is ${this.name}, he works as ${this.profession}, and has ${this.trayectory}, years of experience`
    }

    isStillActive(): boolean {
        console.log(this.isActive);
        return this.isActive
    }
}
