// function evenSizeStr(str){
//     if (str.length%2===0){
//         return 'even'
//     }
//     return 'odd'
// }
// console.log(evenSizeStr('Dhakaa'));


// function evenSizeStr(str){
//     const size = str.length;
//     if(size%2===0){
//         console.log('evenSize');
//     }
//     else{
//         console.log('oddSize');
//     }
// }
// evenSizeStr('Dhakaa');
// evenSizeStr('Dhaka');

function doubleOrTriple(num , isdouble){
    if(isdouble===true){
        const result=num*2;
        return result;
    }
    else{
        const result = num*3;
        return result;

    }
}
console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));