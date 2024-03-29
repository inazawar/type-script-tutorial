export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrrr';
  }
}

const cry = new Tiger;
console.log(cry.cry())