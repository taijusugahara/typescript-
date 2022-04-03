export {};

const nextYearSalary = (currentSarary:number,rate:number=1.1):number =>{
  return currentSarary * rate
}

console.log(nextYearSalary(1000))