"use strict";

//console.log('app.js connected to index');

var userInput;

function validate(input, compare){
  var result = false;
  input = input.toLowerCase();
  if(compare){
    if(input === "y" || input === "yes"){
      result = true
    }
  }
  else{
    if(input === "n" || input === "no"){
      result = true
    }
  }
  return(result);
}

var answers = [,,,,];

function startQuiz(){
  //console.log('click');

  //give quiz
  userInput = prompt("Was I born in Des Moines?");
  answers[0] = validate(userInput, false);
  //console.log(answers);
  userInput = prompt("Did I attend public school?");
  answers[1] = validate(userInput, true);
  //console.log(answers);
  userInput = prompt("Do I work in the food industry?");
  answers[2] = validate(userInput, false);
  //console.log(answers);
  userInput = prompt("Did I get a diploma?");
  answers[3] = validate(userInput, true);
  //console.log(answers);
  userInput = prompt("Am I interested in Computers?");
  answers[4] = validate(userInput, true);
  //console.log(answers);

  // return result
  var i;
  var result = true;
  for(i = 0; i<answers.length; i++){
    if(!answers[i]){
      result = false;
      break;
    }
  }
  if(result){
    alert("Congrats! You passed!");
  }else{
    alert("Sorry. You failed.");
  }
}