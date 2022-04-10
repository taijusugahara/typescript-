export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number
}
//optional
type PartialType = Partial<Profile>;
//all required
type RequireType = Required<Profile>