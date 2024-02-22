let newArray=[]
const findEven=(array)=>{
    for (const Name of array) {
        // console.log(Name.length);
        if(Name.length%2===0){
            newArray.push(Name)
        }
        
    }
    return newArray

}
console.log(findEven(['Ahnaaf','Sakb','Rakib','Jankar']));