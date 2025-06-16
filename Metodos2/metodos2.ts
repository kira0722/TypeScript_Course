function greet(name : string, gret?: string): string {
    if(gret) {
        return `${gret}, ${name}`
    }else{
        return `hola, ${name}`
    }
}

console.log(greet("carlitos"));
console.log(greet("pedrito", "greet days"));

//parametros multiples

function sumAll(...numbers : number[]) : number {
    return numbers.reduce((acum, actual) => acum + actual, 0)
}

console.log("result of numbers sum : ", sumAll(2, 3, 56 ,7 ,8));

//valores por defecto

function bye(name : string, byes : string = "adios"): string {
    return `${byes}, ${name}`
}

console.log(bye("carlitos"));
console.log(bye("pedrito", "see you"));