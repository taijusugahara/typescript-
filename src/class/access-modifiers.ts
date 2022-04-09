export {};

class Person{
  public name:string;
  private age:number;
  protected nationality:string;

  constructor(name:string,age:number,nationality:string){
    this.name = name;
    this.age = age;
    this.nationality = nationality
  }

  profile():string{
    return `name:${this.name},age:${this.age}`
  }
}

class Android extends Person{
  constructor(name:string,age:number,nationality:string){
    super(name,age,nationality);
  }
  profile():string{
    return `name:${this.name},nationality:${this.nationality}`
  }//privateは継承先で使えない。protectedは使える
}

let taro = new Person("Taro",20,"Canada");
let hanako = new Person("Hanako",17,"UK");
console.log(taro.name)
// console.log(taro.age)
console.log(taro)
console.log(taro.profile())//methodからはprivateのものも取得できる
