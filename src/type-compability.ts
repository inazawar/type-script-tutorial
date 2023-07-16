export {};

let fooCompatible: any;
let barCompatible: string = 'typeScript';

console.log(typeof fooCompatible);
fooCompatible = barCompatible;

console.log(typeof fooCompatible)


let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNmuberLiteral: 1976 = 1976;
fooNumber = fooNmuberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string,) {}
}

let me: Animal;
me = new Person(43, 'aaa')