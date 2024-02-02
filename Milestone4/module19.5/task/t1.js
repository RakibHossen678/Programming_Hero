const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let rev_str = [];

for (const color of colors) {
    // console.log(color);
    rev_str.unshift(color)
}
console.log(rev_str);