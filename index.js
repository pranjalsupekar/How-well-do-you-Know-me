var readlineSync = require('readline-sync');
 
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName  + ' to How well Do you know pranjal');

var score=0;
var age= 25;
var place ="Indore";
var food ="Pizza";
var club ="Manchester";
var player="Ronaldo";

var userAnswerAge=readlineSync.question('what is pranjal age ');
if(userAnswerAge == age){
    score++
    console.log(" YaY 👍 Right answer")
}
else{
  console.log('sorry wrong Answer 👎')
}
var userAnswerPlace = readlineSync.question('where do pranjal live ');
if(userAnswerPlace == place){
    score++
    console.log(" YaY 👍 Right answer")
}
else{
  console.log('sorry wrong Answer 👎')
}
var userAnswerFood = readlineSync.question('whats is pranjal fav fast food ');

if(userAnswerFood == food){
    score++
    console.log(" YaY 👍 Right answer")
}
else{
  console.log('sorry wrong Answer 👎')
}

var userAnswerClub =readlineSync.question('which club do pranjal support ');

if(userAnswerClub == club){
    score++
    console.log(" YaY 👍 Right answer")
}
else{
  console.log('sorry wrong Answer 👎')
}

var userAnswerPlayer = readlineSync.question('What is pranjal fav player ');

if(userAnswerPlayer == player){
    score++
    console.log(" YaY 👍 Right answer")
}
else{
  console.log('sorry wrong Answer 👎')
} 

console.log('Your score is ' + score)