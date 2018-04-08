const message = "Hello World!";

console.log('startsWith: ', message.startsWith('H'));
console.log('endsWith: ', message.endsWith('!'));
console.log('includes: ', message.includes('e'));

console.log('startsWith: ', message.startsWith('d'));
console.log('endsWith: ', message.endsWith('h'));
console.log('includes: ', message.includes('s'));

console.log('startsWith: ', message.startsWith('o', 4));
console.log('endsWith: ', message.endsWith('l', 3));
console.log('includes: ', message.includes('W', 6));

console.log('sandip'.repeat(3));

let indent = "s".repeat(4);
let indentLabel = 0;

let newIndent = indent.repeat(++indentLabel);

console.log(newIndent);
