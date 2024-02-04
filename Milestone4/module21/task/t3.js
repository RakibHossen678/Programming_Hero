//Write a function to count the number of vowels in a string.


// function countVowel(string){
//     let vowel='';
//     for (const letter of string) {
//         // console.log(letter);
//         if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
//         vowel+=letter

        
//     }
//     let count = vowel.length;
//     return count

// }
// console.log(countVowel('voooowel'));

function countVowel(string){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    let vowel='';
    for (const letter of string) {
        // console.log(letter);
        if(vowels.includes(letter)){
        vowel+=letter;


        }

        
    }
    let count = vowel.length;
    return count

}
console.log(countVowel('Rakib'));