/*
Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/
function arrayClone(input) {
    let newArr = [];
    for(let i = 0; i < input.length; i++) {
        newArr.push(input[i]);
    }
    alert(newArr);
}