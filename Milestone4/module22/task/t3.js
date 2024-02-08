// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicsBudget(laptopQuantity , tabletQuantity , mobileQuantity ){
    const laptopPrice=35000;
    const tabletPrice=15000;
    const mobilePrice=20000;

    const laptopPriceTotal=laptopPrice*laptopQuantity;
    const tabletPriceTotal=tabletPrice*tabletQuantity;
    const mobilePriceTotal=mobilePrice*mobileQuantity;

    const totalMoneyRequired=laptopPriceTotal+tabletPriceTotal+mobilePriceTotal;
    return totalMoneyRequired;
} 
console.log(calculateElectronicsBudget(3,4,5));