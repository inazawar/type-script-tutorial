export {};

let name: any = 'Ham';

// let length = name.length as number;
let length = (name as string).length;

// JSAXの気泡と似ているため非推奨
// let length = (<string>name).length;

length = 'foo';

