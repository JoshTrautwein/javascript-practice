function sumAndProduct(array){
    let sum = 0;
    let product = 1;
    if(array.length == 0){
        product = 0;
    }
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        product *= array[i];
    }
    alert("sum: " + sum + " product: " + product);
}