export {};

type Mojiretu = string

let name:Mojiretu = "test"

console.log(name)

type dict ={
  name: string,
  age : number
}

const example1 = {
  name: 'ham',
  age : 43
}

type dict2 = typeof example1;



// console.log(dict2)