function discountedPrice(Quantity){
    if(Quantity<=100){
        const total=Quantity*100
        return total
    }
    else if(Quantity<=200){
        const total=Quantity*90
        return total
    }
    else{
        const total=Quantity*70
        return total
    }
}
console.log(discountedPrice(600));
console.log(discountedPrice(5));