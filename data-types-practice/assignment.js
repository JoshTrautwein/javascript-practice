const MASK_CHAR = '*';


// ---------------------------------------------------------


// 1. Write a function to check if input is an alphabet character
function isAlphaChar(c) {
    let b = false;
    let letterRegEx = /^[A-Za-z]+$/;
    //Write your code here
    if(c.search(letterRegEx) != -1){
        b = true;
    }
    return b;
}


// 2. Write a function to check if string contains only alphabets
function isAlpha(str) {
    let allAlpha = true;
    //write your code here
    for(let i = 0; i < str.length; i++){
        if(isAlphaChar(str[i]) == false){
            allAlpha = false;
            break;
        }
    }
    return allAlpha;
}


// 3. Write a function to find if a character is present in a string
function has(str, chr) {
    let found = false;
    //Write your code here 
    if(str.indexOf(chr) != -1){
        found = true;
    }
    return found;
}


// 4. Write a function to unmask the character in a string
//e.g. unmaskChar('Josh', 'o') will result into '*o**'
//unmaskChar('Teststring', 's') will result into '**s*s*****'
function unmaskChar(source, c) {
    let unmasked = '';
    //Write your code here
    for(let i = 0; i < source.length; i++){
        if(source[i] === c){
            unmasked = unmasked.concat(c);
        }
        else{
            unmasked = unmasked.concat(MASK_CHAR);
        }
    }
    return unmasked;
}