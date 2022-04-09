export {}

interface Profile{
  underTwenty: boolean;
  name: string,
  [index:string]:string|number|boolean
}

let profile: Profile = {name:"Ham",underTwenty:false};

//How to write index signature
//{ [index:typeForIndex] : typeForValue }

profile.name = 'Ham'
profile.age = 43
profile.nationality = 'Japan'

console.log(profile)