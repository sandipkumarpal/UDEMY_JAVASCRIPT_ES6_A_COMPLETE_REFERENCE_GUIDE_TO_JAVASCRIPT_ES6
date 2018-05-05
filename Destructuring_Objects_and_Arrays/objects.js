let options = {
    repeat: true,
    save: false
}

// let repeat = options.repeat;
// let save = options.save;
let {repeat, save} = options;
console.log(repeat);
console.log(save);

let newNode = {
    type : "Indefinder",
    name: "Sandip",
    loc: {
        start: {
            line: 1,
            colume: 1
        },
        end: {
            line: 1,
            colume: 4
        }
    }
}

let {loc: {start}} = newNode;
console.log(start);