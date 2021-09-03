var readlineSync = require ("readline-sync");
var score=0;

var userName = readlineSync.question("Whats ur name ?");

console.log("Welcome " +userName+" to Do u know tanya?");
console.log("---------------------------------");



function play(que,ans){
  var userAns = readlineSync.question(que);


  if(userAns==ans){
    console.log("You r Right!");
    score=score+1;
  }else{
    console.log("You r Wrong!");
    score=score-1;
  }

  console.log("score: ",score);
  console.log("------------- ");


}

//writting objects

// var questionOne = {
//   question: "Who is my favorite superhero?",
//   answer: "AA",
// }

// var questionTwo = {
//   question: "Which is my favorite sad song?",
//   answer: "khagadada dhoniyalli",
// }

//var question n=number can be written here
 



//Array:  adding objects into array

// var questions =[questionOne,questionTwo];
       
    
          //or


//we can write array like this also
var questions =[{
  question: "Who is my favorite superhero?",
  answer: "AA",
},{
  question: "Which is my favorite sad song?",
  answer: "khagadada dhoniyalli",
} //,{que3,ans3 :cab be write here}
];

//for loop::  
 for(var i=0;i<questions.length;i++) {
   var currentQue = questions[i];
   play(currentQue.question,currentQue.answer);

 }



 //printing final score
 console.log("yeye!  you scored:",score);






