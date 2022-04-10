export {};

type Profile = {
  name: string;
  age: number;
}

const me:Profile ={
  name: "Ham",
  age :43
}

me.age++

console.log(me)

type PersonalDataType = Readonly<Profile>;
//全てread only
const friend:PersonalDataType={
  name: 'Shigeru',
  age:40
}
// friend.name = "haa"
// friend.age++

type Optional<T> = { readonly [P in keyof T]: T[P]}
type OptionalProfile = Optional<Profile>