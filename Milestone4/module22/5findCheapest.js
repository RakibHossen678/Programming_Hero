const price=[
    {name:'Samsung', price:20000, camera:'12mp', color:'black'},
    {name:'Xoami', price:18000, camera:'12mp', color:'black'},
    {name:'Oppo', price:30000, camera:'12mp', color:'black'},
    {name:'Iphone', price:90000, camera:'12mp', color:'black'},
    {name:'walton', price:12000, camera:'12mp', color:'black'},
    {name:'vivo', price:11000, camera:'12mp', color:'black'}
];

// function findTheCheapest(array){
//     // console.log(array);
//     let cheapest=array[0];
//     for (const price of array) {
//         if(price.price < cheapest.price){
//             cheapest=price;
//         }
//     }
//     return cheapest;
// }
// console.log(findTheCheapest(price));


function findTheHighest(array){
    // console.log(array);
    let highest=array[0];
    for (const price of array) {
        if(price.price > highest.price){
            highest=price;
        }
    }
    return highest;
}
console.log(findTheHighest(price));