const bottle ={
    brand:'pran',
    price:30,
    weight:'1kg',
    type:'minerels'
}

// The syntax for accessing the property of an object is:
// 1.
console.log(bottle.brand); //objectName.property

// or

console.log(bottle['price']);// person["age"]

// Adding new value

bottle.price=31;

bottle["weight"]='3kg';
console.log(bottle);