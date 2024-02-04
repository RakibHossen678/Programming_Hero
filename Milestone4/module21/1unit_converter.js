//inch to feet

// function inchToFeet(inch){
//     const feet = inch/12
//     return feet
// }
// console.log(inchToFeet(75));


function inchToFeet(inch){
    const feetFraction = parseInt(inch/12);
    // return feetFraction
    const feetRemaining=inch%12;
    const result = `${feetFraction} ft ${feetRemaining} inch`
    return result
}
console.log(inchToFeet(68.5));


