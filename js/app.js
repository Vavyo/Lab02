"use strict";
//console.log('app.js connected to index');

//get user
var userName = prompt("Who are you?");
alert("Welcome to my page, " + userName + "!");

//declare variables
var userInput;
var score = 0;
var attemptsRemaining;


//Checks answers to a given boolean key
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
  if (result === true){score++;}
}

//function called when the Attempt Quiz button element is clicked
function startQuiz(){
  //console.log('click');

  //give quiz
  userInput = prompt("Was I born in Des Moines?");
  validate(userInput, false);
  //console.log(answers);
  userInput = prompt("Did I attend public school?");
  validate(userInput, true);
  //console.log(answers);
  userInput = prompt("Do I work in the food industry?");
  validate(userInput, false);
  //console.log(answers);
  userInput = prompt("Did I get a diploma?");
  validate(userInput, true);
  //console.log(answers);
  userInput = prompt("Am I interested in Computers?");
  validate(userInput, true);
  //console.log(answers);
}


function numberQuestion(){
  for(attemptsRemaining=4;attemptsRemaining>0;attemptsRemaining--){
    do{
      userInput = parseInt(prompt("Guess a number. Attempts remaining: " + attemptsRemaining));
    }while(isNaN(userInput))
    if(userInput === 3){
      alert('You nailed it! The answer was 3!');
      score ++;
      break;
    }else if(userInput > 3){
      alert('Too high!');
    }else if(userInput < 3){
      alert('Too low!');
    }
    if(i === 1){
      alert('Sorry the answer was 3.');
    }
  }
}

function travelQuestions(){
  var locations = ['canada','washington dc','wyoming'];
  attemptsRemaining = 6;
  while(attemptsRemaining > 0){
    console.log('attempts remaining: ' + attemptsRemaining);
    attemptsRemaining--;
    userInput = prompt('Where have I traveled out of state? (answer could be a country or a state!)').toLowerCase();
    for (var i = 0; i<locations.length; i++){
      if(userInput === locations[i]){
        alert('Congrats! You nailed it!');
        score++
        attemptsRemaining = 0;
        break;
      }
    }
  }
  alert('The possible answers were: ' + locations[0] + ', ' + locations[1] + ', ' + locations[2])

  alert('Your final score is: ' +score);
}
