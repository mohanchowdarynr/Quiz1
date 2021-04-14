var readlineSync = require("readline-sync");

var userName = readlineSync.question("Type your name,if any? ");

console.log("Welcome " + userName + "!!! \n");
console.log("Let's play my game \n");

var score = 0;

var highScores = [{
  name: "kunal shah",
  score: 3
},
{
  name: "Elon musk",
  score: 3
}];

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct!");
    score = score + 1;
  } else{
    console.log("Wrong!");
  }
  console.log("Current Score: " + score);
  console.log("-----------------");
}


var questions = [{
  question: "Have i graduated? ",
  answer: "yes"
},
{
  question: "what is my full name? ",
  answer: "Nagabhiru mohan"
},
{
  question: "What sport do i like most? ",
  answer: "cricket"
}];


for(var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

console.log("\n Yayy!! You have scored: ", score);

console.log("\n-----Leaderboard-----");
console.log("Name \t Score");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name + " \t " + highScores[i].score);
}