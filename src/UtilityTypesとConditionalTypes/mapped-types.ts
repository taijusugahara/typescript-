import { type } from "os";

export {}

type Profile = {
  name: string;
  age: number;
}
type PartialType = Partial<Profile>;

type Optional<T> = { [P in keyof T]?: T[P]|null }
type OptionalProfile = Optional<Profile>