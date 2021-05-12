var readlineSync = require('readline-sync');
const chalk = require('chalk');

var uname = readlineSync.question("What's your name?");
console.log(chalk.cyanBright("\nHello " +uname+ "! Let's start the quiz on Brooklyn 99\n"));
console.log("You will have to answer 3 out of 5 questions correctly to move to the next round\n");
var ans = readlineSync.question("Press enter key to continue");

var score = 0;

var quest1 = [
  q1 = {
    question: "1. How late is Amy after getting stuck in line at the bank?",
    options: ["45 seconds", "60 seconds", "70 seconds", "75 seconds"],
    answer: "70 seconds"
  },
  q2 = {
    question: "2. Who is Jake's favorite artist based on his lie detector test?",
    options: ["Jay-Z", "Beyonce", "Bruno Mars", "Taylor Swift"],
    answer: "Taylor Swift"
  },
  q3 = {
    question: "3. After forgetting to hang posters for a blood drive, how many pints of blood does Jake donate himself?",
    options: ["Five", "Three", "Four", "Two"],
    answer: "Five"
  },
  q4 = {
    question: "4. When Jake sends Captain Holt an email, what did he accidentally leave as his signature?",
    options: ["The name of Amy's sex tape", "My stinky butt", "H.A.G.S. Jake", "My smelly farts"],
    answer: "My stinky butt"
  },
  q5 = {
    question: "5. What was the final score of Amy and Jake's bet?",
    options: ["Amy-55, Jake-56", "Amy-84, Jake- 93", "Amy-64, Jake-74", "Amy-70, Jake-81"],
    answer: "Amy-84, Jake- 93"
  }
]

var quest2 = [
  q1 = {
    question: "6. When playing Never Have I Ever, what's the one thing Amy has actually done?",
    options: ["Had sex in the back of a squad car", "Changed lanes without signaling", "Had a one night stand with a guy from a band", "Left a movie before the credits finished"],
    answer: "Had a one night stand with a guy from a band"
  },
  q2 = {
    question: "7. What's the name of the picture book Terry makes for Cagney and Lacey?",
    options: ["Cagney and Lacey: Adventure Cops", "The Adventures of Cagney and Lacey: NYPD edition", "June Bug and Cricket take Brookyln", "June Bug and Cricket: Adventure Girls"],
    answer: "June Bug and Cricket: Adventure Girls"
  },
  q3 = {
    question: "8. When trying to impress Kevin, Jake says that he read an article in The New Yorker from how many week ago?",
    options: ["Five weeks ago", "Three weeks ago", "Two weeks ago", "Four weeks ago"],
    answer: "Four weeks ago"
  },
  q4 = {
    question: "9. What is the name of Captain Holt's original car?",
    options: ["Cheryl", "Gertrude", "Gertie", "Cindy"],
    answer: "Gertie"
  },
  q5 = {
    question: "10. After Boyle gets shot, the doctors tell him if the bullet was how much higher he might not have walked again?",
    options: ["2mm to the left and a foot higher", "4mm to the right and 13 inches higher", "12mm to the left and 15 inches higher", "20mm to the right and 2 feet higher"],
    answer: "2mm to the left and a foot higher"
  },
  q6 = {
    question: "11. In Boyle Bingo, who put 'Boyle says gobble, gobble, gobble' on their scorecard?",
    options: ["Rosa", "Gina", "Amy", "Terry"],
    answer: "Gina"
  }
]

for(i=0; i<quest1.length; i++){
  quiz(quest1[i].question, quest1[i].options, quest1[i].answer);
}

if (score >=3 ){
  console.log("\nMoving to the next round...");
  var ans = readlineSync.question("Press enter key to continue");
  for(i=0; i<quest2.length; i++){
    quiz(quest2[i].question, quest2[i].options, quest2[i].answer);
  }
  console.log("\nYou have come to the end of the quiz!");
  console.log(chalk.bold.cyanBright("\nYour final score is " +score));
  console.log("\nThankyou for playing!");
}
else {
  console.log("\nSorry! You dont move to the next round. Please try again");
  console.log(chalk.bold.cyanBright("\nYour final score is " +score));
}



function quiz(question, options, answer){
  console.log("\n" +question);
  var index = readlineSync.keyInSelect(options);
  if(options[index] == answer){
    console.log(chalk.greenBright("Your answer is correct"));
    score+=1;
    console.log(chalk.cyanBright("Your score is " +score));
  }
  else {
    console.log(chalk.redBright("Your answer is wrong"));
    console.log(chalk.cyanBright("Your score is " +score));
  }
}