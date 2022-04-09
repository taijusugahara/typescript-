export {};

class VisaCard{

  constructor(public readonly owner:string){
  }
}

let myVisaCard = new VisaCard('Hamsan')

console.log(myVisaCard.owner)
// myVisaCard.owner = "Raaaa"