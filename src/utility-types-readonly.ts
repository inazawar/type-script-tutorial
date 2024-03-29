export {};


type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersomalDataType = Readonly<Profile>;

const friend: PersomalDataType = {
  name: 'Shigeru',
  age: 40,
};

friend.age++;