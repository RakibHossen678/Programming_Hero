/**
 * Truthy:
 * 1.true
 * 2.any number(+ve,-ve) will be truth other than 0
 * 3.any string is truthy other than empty string
 * 4.empty object
 * 5.empty array
 * 
 * Falsy:
 * 1.false
 * 2.0
 * 3.empty string
 * 4.undefined
 * 5.null
 * 
 */

const x=[];
if(x){
    console.log('True');
}
else{
    console.log('False');
}

// optional
const y='';
if(!y){
    console.log('falsy');
}
else{
    console.log('true');
}