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

let accessAllowed;
let age=prompt('How old is ya?', '');

if (age>18) {
    accessAllowed = true;
} else {
        accessAllowed = false;
}

alert(accessAllowed);
