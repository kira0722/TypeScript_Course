interface Persona1 {
  name: string;
  age: number;
  isDeveloper: boolean;
}

let persona: Persona1 = {
  name: "carlitos",
  age: 23,
  isDeveloper: true,
};

console.log("persona: ", persona);

let people: Persona1[] = [
  { name: "carlitos", age: 24, isDeveloper: true },
  { name: "pepito", age: 12, isDeveloper: false },
  { name: "pedrito", age: 64, isDeveloper: true },
];

console.log("people: ", people);

interface Sum {
    (a : number, b : number) : number
}

let sums : Sum = (a : number, b : number): number =>{
    return a + b
}

console.log("the result of the sum its: ", sums(2, 9));

