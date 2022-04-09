export {};

namespace Japanese{
  export namespace Tokyo{
    export class Person{
      constructor(public name:string){
      }
    }
  }

  export namespace Osaka{
    export class Person{
      constructor(public name:string){
      }
    }
  }
  
}

namespace English{
  export class Person{
    constructor(
      public firstname:string,
      public middlename:string,
      public lastname:string){
    }
  }
}



const me = new Japanese.Osaka.Person('wai')
console.log(me.name)

const you = new English.Person('xxx','yyy','zzz')
console.log(you)