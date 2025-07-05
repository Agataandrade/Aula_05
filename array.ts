import ler = require("readline-sync");

const list: Array<number> = new Array <number>(12,75);

console.log("coloque um numero ")
list.push(ler.questionInt())
let numero = ler.questionInt()


console.log(list);
console.table(list);

list.pop();

console.table(list);

