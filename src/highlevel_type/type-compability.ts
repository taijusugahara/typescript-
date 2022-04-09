export {};

let fooCompatible: any;
let barCompatible:string = "Typescript"

fooCompatible = barCompatible
console.log(fooCompatible)
console.log(typeof fooCompatible)

let fooIncompatible:string;
let barIncompatible:number=1;

// fooIncompatible = barIncompatible

let fooString;
let barString:string = 'string';

fooString = barString;


let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral

let fooNumber:number;
let fooNumberLiteral:1976 = 1976

fooNumber = fooNumberLiteral

interface Animal{
  age:number;
  name:string;
  
}

class Person{
  constructor(public age:number,public name:string){}
}
let me :Animal;
me = new Person(43,"Hamsan")