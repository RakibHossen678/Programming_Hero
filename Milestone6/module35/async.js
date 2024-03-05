console.log(1)
console.log(2)
setTimeout(doSomething('Rakib'),4000)
console.log(4)
console.log(5)

function doSomething(name){
    console.log(`Hello ${name}`)
}