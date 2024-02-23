// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sleep(){
//         console.log(`Sleeping now ${this.name}`);
//     }
// }

// const kodomAli=new person('Kodom Ali',43);
// console.log(kodomAli);
// kodomAli.sleep();

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);