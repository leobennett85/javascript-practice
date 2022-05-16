 
/*
//Task 1
 alert (null || 2 || undefined); // returns: 2 because 2 is true

 //Task 2
 alert( alert(1) || 2 || alert(3)); //Shows 1, returns 2 does not contiunue to evaluate

 //Task 3
 alert(1 && null && 2); //Returns null

 //Task 4
 alert(alert(1) && alert(2)); 
 //Shows 1 because of the alert() but shows and returns undefined which is 
 //falsy so it stops

//Task 5
alert(null || 2 && 3 || 4);
//returns 3; 2 && 3 is evaluated first as 3, 
//then null || 3 || 4 returns 3 as the first truthy value

//Task 6
//Write an if condition to check that age is between 14 and 90 inclusively
//“Inclusively” means that age can reach the edges 14 or 90.
let age = prompt('How old', '');

if (age >=14 && age <=90) {
    alert('You are bewtween the range');
} else {
    alert('You are outside the range');
}
**/

//Task 7
/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
**/
/* Variant 1
let age = prompt('How old', '');

if (!(age >=14 && age <=90)) {
    alert('You are NOT bewtween the range')
} else {
    alert('You are inside the range')
}

/*Variant 2
let age = prompt('How old', '');

if (age > 90 && age < 14) {
    alert('You are NOT bewtween the range');
} else {
    alert('You are intside the range');
}
**/

//Task 8
//Which of these alerts are going to execute? <br />
//What will the results of the expressions be inside if(...)?

//if (-1 || 0) alert( 'first' );
// alert will execute as -1 is true, result: -1
//if (-1 && 0) alert( 'second' );
// alert will not execute as -1 && 0 returns false
//if (null || -1 && 1) alert( 'third' );
// alert will execute as -1 && 1 returns true and null || true returns true, result: true

//Task 9
let login = prompt('Login:', '');
let message, password;

if (login == "Admin" || login =="admin") {
    password = prompt('Password:','');
    message = (password == 'TheMaster') ? 'Welcome' :
              (password == '' || password == null) ? 'Canceled' :
              'Wrong Password!';
    alert(message);
} else if (login == '' || login == null) {
    alert('Canceled');
} else {
    alert("I don't know you!");
}

