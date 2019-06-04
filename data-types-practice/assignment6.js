/*Write a JavaScript program which accept a number as input and insert dashes (-) between
  each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.*/
  function dash(input){
      let newString = ""
      for(let i = 0; i < input.length - 1; i++){
        newString = newString + input[i];
        if(input[i] % 2 == 0 && input[i+1] % 2 == 0){
            newString = newString + "-";
        }
      }
      newString = newString + input[input.length - 1];
      alert(newString);
  }