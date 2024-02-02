// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if(i>=4){
//         break;
//     }
    
// }

// let sum=0;
// for(let i=1 ; i<100; i++ ){
//     sum+=i
//     console.log(sum);

//     if(sum>=100){
//         break;
//     }
// }

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}