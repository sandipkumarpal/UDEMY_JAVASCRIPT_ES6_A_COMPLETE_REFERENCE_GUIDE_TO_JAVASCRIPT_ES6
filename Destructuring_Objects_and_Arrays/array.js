let color = ["red", "green", "blue"];

let [fColor, sColor] = color;

console.log(fColor, sColor);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

let food = ["burgger"];

let [firstFood, sFood="Fries"] = food;

console.log(firstFood);
console.log(sFood);