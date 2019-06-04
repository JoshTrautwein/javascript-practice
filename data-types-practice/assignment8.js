/*
Finds the most frequent item in the array
*/
function mostFrequent(arrInput){
    let count = 0;
    let mostFrequentChar = "";
    for(let i = 0; i < arrInput.length; i++){
        let charCount = 0;
        for(let x = 0; x < arrInput.length; x++){
            if(arrInput[i] == arrInput[x]){
                charCount += 1;
            }
        }
        if(charCount > count){
            count = charCount;
            mostFrequentChar = arrInput[i];
        }
    }
    alert(mostFrequentChar + "(" + count + " times)");
}