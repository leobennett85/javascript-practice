// String conversion
let value = true; // This value is a boolean
alert(`This value is: ${typeof(value)}`);

// Use String(value) to convert another type to a String
value = String(value); //we are converting the boolean to a String
alert(`Typepof now: ${typeof(value)}, now holds a value of ${value}`);

// Numeric conversion
alert("6"/"2"); // this automatically equals 3 as these strings are converted to numbers
// Number(value) will convert another type to a number
let str = '123';
alert(`This value is currently: ${typeof(str)}`); // Value is of typer string

let num = Number(str); // Value is currently type Number
alert(`Typeof is now: ${typeof(num)}`);

// Use explicit num conversion when value read from string based source
let age = Number("an arbitrary string instead of a number");
alert(`Type of is now: ${typeof(age)} and Value is: ${age} meaning undefined.`)

// Boolean conversion
alert(Boolean(1)); // Value 1 is true
alert(Boolean(0)); // Value 0 is false
alert(Boolean("0")); // Value "0" is true because its a string
alert(Boolean("")); // Value is false because its empty
