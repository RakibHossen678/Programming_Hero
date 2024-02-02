const bottle ={
    brand:'pran',
    price:30,
    weight:'1kg',
    type:'minerels'
}

//for of : array 
//for in : object

// for (const bottles in bottle) {
//     console.log(bottles);
//     console.log(bottle[bottles]);
// }

const key = Object.keys(bottle);
console.log(key);

for (const keys of key) {
    // console.log(key);
    console.log(keys , bottle[keys]);
    
}