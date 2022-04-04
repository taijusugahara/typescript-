export {};

class Person{
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name = name;
    this.age = age
  }

  profile():string{
    return `name:${this.name},age:${this.age}`
  }
}
let taro = new Person("Taro",20);
let hanako = new Person("Hanako",17);
console.log(taro.name)
console.log(taro.profile())