export {};

type DetailedProfile = {
  name: string;
  height:number;
  weight:number;
}

type SimpleProfile = Pick<DetailedProfile,"name"|"weight">

// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
type SmallProfile = Omit<DetailedProfile,"weight">