'use strict';

alert('Welcome to my page ,I will ask you some questions please answer with yes or no ')
let myCountry = prompt('Do you think i live in Jordan?');
myCountry = myCountry.toLowerCase();
console.log('Do you think i live in Jordan?' + ' ' + myCountry);

if (myCountry === 'yes' || myCountry === 'y') {
  alert('Great job, I live in Jordan');
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
}
else {
  alert('you entered unvalid answer');
}

let myFavoriteFood = prompt('Is my favorite food pizza?');
myFavoriteFood = myFavoriteFood.toLowerCase();
console.log('Is my favorite food pizza?' + ' ' + myFavoriteFood);
if (myFavoriteFood === 'yes' || myFavoriteFood === 'y') {
  alert('Yes, It is delecious, Isn\'t it?');
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
}
else {
  alert('you entered unvalid answer');
}


let userName = prompt('what is your name?');
alert('welcome ' + userName);






