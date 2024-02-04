function removeDuplicat(arrayStr){
    let unique = [];
    for (const word of arrayStr) {
       if(unique.includes(word)===false){
        unique.push(word);
       }
    }
    return unique
}

console.log(removeDuplicat(['Rakib','Labib','Sakib','Rakib','Labib','Sakib','Mohammad']));