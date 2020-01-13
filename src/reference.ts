// importing
import index = require('./index');

// basic
let bool: boolean = false;
let hex: number = 0xf00d;
let color: string = 'blue';

// array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number] = ["hello", 10];

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any;
function warnUser(): void { /* body */ }
let u: undefined = undefined;
let n: null = null;
function error(message: string): never {
    throw new Error(message);
}

// object is a type that represents the non-primitive type
// i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined
