'use strict';
let score=0;
alert('Welcome to my page ,I will ask you some questions please answer with yes or no ')
let myCountry = prompt('Do you think i live in Jordan?');
myCountry = myCountry.toLowerCase();
console.log('Do you think i live in Jordan ?' + ' ' + myCountry);

if (myCountry === 'yes' || myCountry === 'y') {
  alert('Great job, I live in Jordan');
  score++;
}
else if (myCountry === 'no' || myCountry === 'n') {
  alert('No, thats wrong i live in Jordan');
}
else {
  alert('you entered unvalid answer');
}

let myEducation = prompt('Am i a doctor?');
myEducation = myEducation.toLowerCase();
console.log('Am i a doctor?' + ' ' + myEducation);
if (myEducation === 'yes' || myEducation === 'y') {
  alert('no, I am an engineer');
}
else if (myEducation === 'no' || myEducation === 'n') {
  alert('Good, you know me very good , i am an engineer');
  score++;

}
else {
  alert('you entered unvalid answer');
}

let myAge = prompt('Am i 30 years old?');
myAge = myAge.toLowerCase();
console.log('Am i 30 years old?' + ' ' + myAge);
if (myAge === 'yes' || myAge === 'y') {
  alert('OMG, thats too much ,i am 24');
}
else if (myAge === 'no' || myAge === 'n') {
  alert('congrats, your answer is true');
  score++;

}
else {
  alert('you entered unvalid answer');
}

let myFavoriteFood = prompt('Is my favorite food pizza?');
myFavoriteFood = myFavoriteFood.toLowerCase();
console.log('Is my favorite food pizza?' + ' ' + myFavoriteFood);
if (myFavoriteFood === 'yes' || myFavoriteFood === 'y') {
  alert('Yes, It is delecious, Isn\'t it?');
  score++;

}
else if (myFavoriteFood === 'no' || myFavoriteFood === 'n') {
  alert('No, your answer is wrong,I love pizza');
}
else {
  alert('you entered unvalid answer');
}

let myFavoriteColor = prompt('Is my favorite color pink?');
myFavoriteColor = myFavoriteColor.toLowerCase();
console.log('Is my favorite color pink?' + ' ' + myFavoriteColor);
if (myFavoriteColor === 'yes' || myFavoriteColor === 'y') {
  alert('No, I dont like pink');
}
else if (myFavoriteColor === 'no' || myFavoriteColor === 'n') {
  alert('yes, blue is much better');
  score++;

}
else {
  alert('you entered unvalid answer');
}


let userName = prompt('what is your name?');
alert('welcome ' + userName);

let i = 0;
alert('we will play a game ,you should guess the secret number , you have four trials only');
while (i < 4) {
  let secretNumber = prompt('guess the secret number ');
  console.log('guess the secret number' + ' ' +secretNumber);

  if (secretNumber > '4') {
    alert('Too high , try again !');
    i++;
  } else if (secretNumber < '4') {
    alert('Too low !,try again');
    i++;
  } else if (secretNumber === '4') {
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


































