function findAddress(location){

    const street=location.street || '_';
    const house=location.house || '_';
    const society=location.society || '_';
    const locations=`${street} , ${house} , ${society}`
    if(house==='Undefine'){
        locations=house.replace('_')
    }
    // for (const key in location) {
    //     // console.log(location[key]);
    //     return `${location[key]}`
    // }

    // return ` ${location['street']} ,    ${location['house']} , ${location['society']} `

    return locations

}
console.log(findAddress({
    street:10,
    house:'15A',
    society:'Earth Perfect'
}));
console.log(findAddress({
    street:10,
    society:'Earth Perfect'
}));
console.log(findAddress({
    
}));