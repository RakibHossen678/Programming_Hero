// function add(a,b){
//     let sum=a+b;
//     return sum
// }
// console.log(add(10,20));


const sum = (x,y) => x + y;
console.log(sum(5,10));

const mul = (x,y)=>x*y;
console.log(mul(2,8));


const diff=(x,y)=> x-y;
console.log(diff(7,4));


//single parameter 

const getAge = (person) => person.age;
const student = {
    name:'rakib',
    age:21,
};
console.log(getAge(student));

const doubleIt=num=>num*2;
console.log(doubleIt(2));


//no parameter

const getPI=()=>Math.PI;
console.log(getPI().toFixed(4));






//large arrow function 

const doMath=(x,y,z)=>{
    const sum = x+y+z;
    const diff = x-y-z;
    const result = sum+diff;
    return result
}
console.log(doMath(10 ,20,30));