const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(object){
    // console.log(object);
    let sum=0
    let len=object.length;
    let avg;
    // console.log(len);
    for (const items of object) {
        // console.log(items);
        sum +=items.price;
         avg = sum/len
    }
    return avg
}
console.log(findAveragePhonePrice(phones));