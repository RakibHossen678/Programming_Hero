const glass ={
    name : 'glass',
    color:'golden',
    price:12,
    isCleaned:true
}
// const keys = Object.keys(glass);
// const values = Object.values(glass);
// const entries=Object.entries(glass);
// console.log(keys);
// console.log(values);
// console.log(entries);

// delete glass.isCleaned
// console.log(glass);

const {isCleaned , ...rest}= glass;
console.log(rest);


// freeze 

Object.freeze(glass);
