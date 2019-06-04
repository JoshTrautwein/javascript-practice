function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += Math.pow(array[i], 2);
    }
    alert(sum);
}