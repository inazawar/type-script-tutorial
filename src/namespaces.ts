export {};

namespace Japanese {
  export class Person {
    constructor(public name: string){}
  }
}

namespace English {
  export class Person {
    constructor(
      public fistName: string,
      public minndleName: string,
      public lastName: string
      ){}
  }
}

const me = new Japanese.Person('ハムさん');
console.log(me.name);


const michel = new English.Person('Michale', 'Joseph', 'Jackson');
console.log(michel);