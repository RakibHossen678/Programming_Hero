function woodQuantityCalculator(chair , table , bed){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairTotalWood=chair * perChairWood;
    const tableTotalWood=table * perChairWood;
    const bedTotalWood=bed * perBedWood;

    const totalWood=chairTotalWood+tableTotalWood+bedTotalWood;
    return totalWood;
}
console.log(woodQuantityCalculator(0,0,1));
console.log(woodQuantityCalculator(5,1,1));