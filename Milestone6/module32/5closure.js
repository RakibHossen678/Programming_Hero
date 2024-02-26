// function kitchen(){
//     let roast=0;
//     return function(){
//         roast++;
//         return roast
//     }
// }
// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());


// const secServer=kitchen();
// console.log(secServer);
// console.log(secServer());
// console.log(secServer());
// console.log(secServer());
// console.log(secServer());
// console.log(secServer());

// console.log(firstServer());



const sum = () => {
    let counter =0;
    return ()  => {
        counter+=1
        // console.log(counter); 
        return counter   

    }
}
const result = sum()
// result()
// result()
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());