/*
Takes in an array of numbers and sorts them least to greatest
*/
function arraySort(arrInput){
    arrInput.sort(function(a,b) { return a - b });
    alert(arrInput);
}