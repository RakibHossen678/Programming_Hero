//object destructuring


const person = {
    Name: 'John',
    age: 30 
};

// const {Name , age }= person
const {Name , age:boyos }= person

console.log(Name);
console.log(boyos);


//array destructuring

const nums=[45,66];
const [f,s]=nums;
console.log(f);
console.log(s);





// Function parameter destructuring

function doubleThem(a,b){
    return [a*2 , b*3]
}

const [x ,y]=doubleThem(6,9)
console.log(x , y) ;