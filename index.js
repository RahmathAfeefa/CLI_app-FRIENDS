// import chalk from 'chalk';
var readLineSync = require('readline-sync');
var score = 0;
console.log("Welcome to FRIENDS Quiz!!!!!!")
var userName = readLineSync.question("May I know your Name ? ")
console.log("Hello "+ userName + "!!!! Let's begin the game!!!!!")

function play(question,answer) 
{
  var userAnswer = readLineSync.question(question)  
  if( userAnswer === answer)
  {
    console.log("You are right!!")
    score = score + 10
  }
  else 
  {
    console.log("Oops!! Its wrong answer")
  }
  console.log("The current score is "+score)
  console.log("--------------")
}

var questions = 
  [
    {
      Q : ` How many seasons of Friends are there?
          a : 8
          b : 9
          c : 7
          d : 10 \n`,
      A : "10"
    },
    {
      Q : `How many times did Ross get divorced? 
          a : 3 
          b : 2
          c : 1
          d : 4 \n` ,
      A : "3"
    },
    {
      Q : `What does Rachel guess Chandler’s job is? 
          a : Dancer 
          b : Actor
          c : Scientist
          d : Transponster \n` ,
      A : "Transponster"
    },
    {
      Q : `What is the name of Joey’s stuffed penguin?
          a : Pengusy
          b : Hugsy
          c : Teddy
          d : Jancy \n`,
      A : "Hugsy"
    },
    {
      Q : `What color is Monica’s apartment? 
          a : Purple
          b : Blue
          c : Red
          d : Black \n` ,
      A : "Purple"
    },
    {
      Q : `What is the name of Phoebe’s twin sister?? 
          a : Janice
          b : Monica
          c : Ursula
          d : Jossett \n` ,
      A : "Ursula"
    },
    {
      Q : `How many sisters does Joey have?? 
          a : 7
          b : 5
          c : 3
          d : 8 \n` ,
      A : "7"
    },
    {
      Q : `Joey doesn’t share what?
          a : Food
          b : Apartment
          c : Dress
          d : Shoes \n` ,
      A : "Food"
    },
    {
      Q : `Which character famously said, “PIVOT?”
          a : Ross
          b : Rachel
          c : Joey
          d : Chandler \n` ,
      A : "Ross"
    },
    {
      Q : `How many pages was Rachel’s letter to Ross?
          a : 17
          b : 20
          c : 18
          d : 15 \n` ,
      A : "1 "
    }
    
  ]

for(var i = 0; i<questions.length ; i++)
  {
    var currentQ = questions[i]
    play(currentQ.Q,currentQ.A)
  }

console.log("Your Final Score is :" +score)