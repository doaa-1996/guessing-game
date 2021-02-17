'use strict';
let score=0;
alert('Welcome to my page ,I will ask you some questions please answer with yes or no ');

function check(promptMessage, correctMessage, incorrectMessage, correctAnswer){
  let value = prompt(promptMessage).toLowerCase();

  if (value === 'yes' || value === 'y') {
    alert(correctMessage);
    if(correctAnswer === 'yes'){
      score++;
    }
  }
  else if (value === 'no' || value === 'n') {
    alert(incorrectMessage);
    if(correctAnswer === 'no'){
      score++;
    }
  }
  else {
    alert('you entered invalid answer');
  }
}

// q 1
check('Do you think i live in Jordan?', 'Great job, I live in Jordan', 'No, thats wrong i live in Jordan', 'yes');

// q2
check('Am i a doctor?', 'no, I am an engineer', 'Good, you know me very good , i am an engineer', 'no');

// q3
check('Am i 30 years old?', 'OMG, thats too much ,i am 24', 'congrats, your answer is true', 'no');

// q4

check('Is my favorite food pizza?', 'Yes, It is delecious, Isn\'t it?', 'No, your answer is wrong,I love pizza', 'yes');

// q5

check('Is my favorite color pink?', 'No, I dont like pink', 'yes, blue is much better', 'no');

let userName = prompt('what is your name?');
alert('welcome ' + userName);

let i = 0;
alert('we will play a game ,you should guess the secret number , you have four trials only');
while (i < 4) {
  let secretNumber = Number(prompt('guess the secret number '));
  console.log('guess the secret number' + ' ' +secretNumber);

  if (secretNumber > 4) {
    alert('Too high , try again !');
    i++;
  } else if (secretNumber < 4) {
    alert('Too low !,try again');
    i++;
  } else if (secretNumber === 4) {
    alert('congrats, you guessed the secret number');
    score++;

    break;
  }
}
alert('The secret number is 4');




let arr = ['yamin', 'roaa', 'dana', 'hala', 'myar', 'mohammad'];

let correct = false;
for (let k=0; k < 6; k++) {
  let siplings = prompt('name one of my siplings)').toLowerCase();
  console.log('name one of my siplings' + ' ' + siplings);

  for (let d = 0; d < arr.length; d++) {
    let array = arr[d];
    if (siplings === array) {
      alert(' correct ');
      score++;
      correct = true;
      break;
    }
  }
  if (correct === true) {
    break;
  } else {
    alert(' wrong answer, try again ');
  }
}
alert(' My siplings are :   roaa , yamin , dana , hala, mohammad , myar ');


alert('your total score  out of 7 is'+ ' ' +score);


































