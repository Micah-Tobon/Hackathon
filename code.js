function myFunction1(word) {
    var word = document.getElementById("field1").value;
    var array = word.split(" ");
    var vowels = ["a","e","i","o","u"];
    var newWord = "";
    for(var i = 0; i < vowels.length; i++) {
        if(word[0] == vowels[i]) {
          document.getElementsById("field2").value = word+"yay";
            return;
        }
    }

    for(var i = 1; i < word.length; i++) {
        newWord += word[i];
    }
    document.getElementById("field2").value=newWord + word[0] + "ay";
}



function myFunction3() {
  var num1, num2, operation;
  num1 = document.getElementById("field3").value;
  num2 = document.getElementById("field4").value;
  operation = document.getElementById("field5").value;
  if(operation == "+"){
  num1 = (num1/3)*2.5/3.14159;
  num2 = 12;
  document.getElementById("field6").value = num1 + num2;
  }else if(operation == "-"){
  num1 = (num1*12)/213*1323
  num2 = 23;
  document.getElementById("field6").value = num2 - num1;
  }else if(operation == "*"){
  num1 = 4.20;
  num2 = 69;
  document.getElementById("field6").value = num1 * num2;
  }else if(operation == "/"){
  num1 = 11;
  num2 = 83.32;
  document.getElementById("field6").value = num2 / num1;
  }




}
