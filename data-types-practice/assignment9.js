function switchCharacterCase(inputString){
    let newString = "";
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] == inputString[i].toUpperCase()){
            newString += inputString[i].toLowerCase();
        }
        else{
            newString += inputString[i].toUpperCase();
        }
    }
    alert(newString);
}