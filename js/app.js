"use strict";
//console.log('app.js connected to index');

//get user
var userName = prompt("Who are you?");
alert("Welcome to my page, " + userName + "!");

//declare variables
var userInput;
var answers = [,,,,];
var score = 0;

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
  return(result);
}

//function called when the Attempt Quiz button element is clicked
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
    alert("Congrats, " + userName + "! You passed!");
  }else{
    alert("Sorry, " + userName + ". You failed.");
  }
}


function RNGQuestion(){
  var number = Math.floor(Math.random() * 10) + 1;   // Found the random generator on W3 schools (https://www.w3schools.com/js/js_random.asp)
    // console.log('The random number is: ', number);
    var guessCounter = 0;
    var loopCounter = 4;
    var right = false
    // create a while loop with if statements to check for correct answers.
    while(guessCounter < 4){
        var question6 = prompt('Guess a number between 1 and 10. You have ' + loopCounter + ' guesses remaining.');
        loopCounter -= 1;
        // console.log(question6)
        if(question6 !== number && question6 > number){
            alert("You guessed too high! Guess again!");
            guessCounter += 1;
        }else if(question6 !== number && question6 < number){
            alert("You guessed too low! Guess again!");
            guessCounter += 1;
        }
        else{
            alert('You got lucky! Good job.');
            score += 1;
            guessCounter = 4;
            right = true
        }
        // console.log(guessCounter);
    } 
    if(right === false){
        alert('You did not guess the answer. The right answer was: ' + number);
    }
}
var score = 0;

function travelQuestions(){
  var locations = ['canada','washington dc','wyoming'];
  var attemptsRemaining = 6;
  var guess;
  var i;
  while(attemptsRemaining > 0){
    console.log('attempts remaining: ' + attemptsRemaining);
    attemptsRemaining--;
    guess = prompt('Where have I traveled out of state? (answer could be a country or a state!)');
    for (i = 0; i<locations.length; i++){
      if(guess.toLowerCase()=== locations[i]){
        alert('Congrats! You nailed it!');
        score++
        attemptsRemaining = 0;
        break;
      }
    }
  }

alert('Your final score is: ' +score);
}
