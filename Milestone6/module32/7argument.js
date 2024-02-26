function sum(a,b,c){
    console.log(arguments[4]);
    return a+b+c;
}
const total=sum(45,89,12,98,88);
// console.log(total);
console.log(sum.length);//Shows how many parameters you have declared
