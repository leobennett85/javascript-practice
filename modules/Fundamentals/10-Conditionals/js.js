/*
let year = prompt('What year was Leo born?', '');
/**
if (year == 1985){
    alert("You got it!");
} else {
    alert("WRONG!");
}*/

/*
if (year < 1985) {
    alert("Too early b'y!");
} else if (year > 1985) {
    alert("Too late b'y!");
} else {
    alert("Exactly!");
}
**/

/*
let accessAllowed;
let age=prompt('How old is ya?', '');

if (age>18) {
    accessAllowed = true;
} else {
        accessAllowed = false;
}

alert(accessAllowed);
**/

/* TASK 1
if ("0") {
    alert('Hello');
} 
**/

/*
//TASK 2
let officialName = prompt('What is the "official" name of JavaScript', '');

if (officialName == "ECMAScript") {
    officialName = true;
} else {
    officialName = false;
}

alert(officialName);
**/

/*
//TASK 3
let num =  prompt('Pick a number:', '');

if (num > 0) {
    alert("1");
} else if (num < 0) {
    alert("-1")
} else if (num = 0) {
    alert("0");
} else {
    alert('What is that?');
}
**/

//TASK 4
/* Rewrite if using the conditional operator '?'
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
**/

/*
let a = 1;
let b = 2;
let result = (a+b<4) ? 'Below' : 'Over';
alert(result);
**/

//TASK 5
/* Rewrtie using multiple ?

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
**/

let login = prompt('Enter Login:', '');

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login':
    'WHAT DOES THAT MEAN?';
    
alert(message);
