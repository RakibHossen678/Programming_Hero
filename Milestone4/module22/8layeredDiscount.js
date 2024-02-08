function layeredDiscount(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200pric3=70;
    if(quantity<=100){
        const total=first100Price*quantity;
        return total;
    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainingtotal=remainingQuantity*second100Price
        const total=first100Price+remainingtotal;
        return total;
    }
    else{
        const first100Total=100*first100Price;
        const second100Total=100*second100Price;
        const remainingQuantity=quantity-200;
        const remainingtotal=remainingQuantity*above200pric3;
        const total=first100Total+second100Total+remainingtotal;
        return total

    }
}
console.log(layeredDiscount(300));