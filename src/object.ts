export {};

let profile1:object = {name:'Ham' }
profile1 = {birthday : 1998}

let profile2: {
  name: string;
} = {name:'Ham' }

profile2 = {name : "1998"}

console.log(profile2.name)