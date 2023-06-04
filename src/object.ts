export {};

let profile1: object = { name: 'Ham'};
profile1 = {birthYear: 1976};

let profile2: {
  name: string;
  birthYear: number;
} = { name: 'Ham',birthYear: 1111}
profile2 = {name: 'Ham',birthYear: 1976};
console.log({ profile2 })