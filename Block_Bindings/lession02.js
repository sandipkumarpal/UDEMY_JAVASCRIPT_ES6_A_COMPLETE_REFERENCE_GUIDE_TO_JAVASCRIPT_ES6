for (var index = 0; index < 10; index++) {
    console.log('Inside', index);
}
console.log('OutSide', index);

const funcs = [];
const object = {
    a: true,
    b: true,
    c: false
}
for (let index = 0; index < 10; index++) {
    funcs.push(function() {
        console.log('InSide: ', index);
    });
}
for (const key in object) {
    funcs.push(function() {
        console.log('InSide: ', key);
    });
}

funcs.forEach(function(func) {
    func();
});
