export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  Novermber,
  December
}

console.log(Months.January);
console.log(Months.Feburary);

// const MonthsJS = {
//   January: 0,
//   Feburary: 1
// }

// console.log(MonthsJS.January);
// console.log(MonthsJS.Feburary);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFFF00'
}
let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#FFFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;