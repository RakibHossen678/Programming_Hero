const computer ={
    brand : 'acer',
    price:4000,
    processor : 'Intel',
    properties:{
        windows:11,
        intel:"core i3",
        SSD:'128KB'        
    }
    

}

console.log(computer.properties.windows);
console.log(computer.properties.intel);
console.log(computer.properties.SSD);

delete computer.processor
console.log(computer);