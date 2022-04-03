export {};

type Pitcher1 ={
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const sasaki:Pitcher1 ={
  throwingSpeed:154
}

const Ochiai:Batter1 ={
  battingAverage: 0.367
}

// type TwoWayplayer={
//   throwingSpeed: number;
//   battingAverage: number;
// }
type TwoWayplayer = Pitcher1 & Batter1;

const Otani: TwoWayplayer = {
  throwingSpeed:164,
  battingAverage: 0.267
}