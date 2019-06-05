function printMultiDimArr(array){
    for(let i = 0; i < array.length; i++){
        alert("row" + i);
        for(let n = 0; n < array[i].length; n++){
            alert(array[i][n]);
        }
    }
}