const oddNums=[1,3,5,7,9];
const Even=[]

for(let i=0 ; i<oddNums.length;i++){
    // console.log(oddNums[i]);
    const nemArray=oddNums[i]+1;
    Even.unshift(nemArray)
}
// console.log(Even);
const evenNums=oddNums.map(nums=>nums+1);
console.log(evenNums);