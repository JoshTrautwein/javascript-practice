/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[]*/
function first(input, num){
    if(num === undefined) {
        alert(input[0]);
    }
    else if(input.length === 0){
        alert([]);
    }
    else if(num < 0){
        alert([]);
    }
    else {
        alert(input.slice(0, num));
    }
} 