/*Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/
function concatinate(input){
    let newString = "";
    for(let i = 0; i < input.length; i++){
        newString = newString + input[i];
    }
    alert(newString);
    console.log("Test statement")
}