/**
 * 8 ways to get Undefine
 * 1.variable that is not initialized will give Undefine
 * 2.function with no return
 * 3.parameter that is not passed will be   undefined
 * 4.if return has nothing on the right side will return undefine
 * 5.property taht doesn't exists on as object will give you undefine
 * 6.accessing aray elements oudsite of the index range
 * 7.deleting an element inside an array
 * 8.dest a value directly to undefined
 */

let first;
// console.log(first);

function secod(a,b){
    const total=a+b;
}
// console.log(secod());



function secod(a,b){
    const total=a+b;
    console.log(a,b);
}
secod(1);




