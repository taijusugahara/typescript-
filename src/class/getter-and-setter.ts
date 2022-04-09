export {};

class MyNumberCard{
  private _owner:string;
  private _secretNumber : number;

  constructor(owner:string,secretNumber:number){
    this._owner = owner;
    this._secretNumber = secretNumber
  }
  get owner(){
    return this._owner
  }

  set secretNumber(secretNumber:number){
    this._secretNumber = secretNumber
  }

  debugPrint(){
    return this._secretNumber
  }
}

let card = new MyNumberCard("hamsan",12345678910)

// card.owner = "Ham"
console.log(card.owner)

console.log(card.debugPrint())
card.secretNumber = 999999999

console.log(card.debugPrint())