/* This is a MULTI-LINE comment 
The code below is an example STATEMENT (instruction or command)
console.log is a FUNCTION that displays infor in the console (output) area
STATEMENTS end with a SEMICOLON (;)
*/
console.log("Welcome to JavaScript!!");

// This is a SINGLE-LINE comment 

// DECLARE A new VARIABLE 
let pokemon;

// ASSIGN a VALUE to the variable 
// its like putting an item in the box
pokemon ="Pikachu";

// Can CHANGE the value stored in a variable 
let mood = "Happy";
console.log(mood);
mood = "Sad";
console.log(mood);

// Can COPY the value from one variable into another 
let isHappy = true;
let isThrilled;
isThrilled = isHappy;
console.log(isThrilled);

 // MATH OPERATIONS
 let score = 0;
score = score + 5;
console.log(score);
score = score - 10
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Above statements log the VALUES sotred in variables
// Below statement logs a literal String
console.log("lunch");

//DECLARE (create) your own function 
function skincare() {
    //STAEMENTS (actions) to execute for this routine
    console.log("1. Cleanse");
    console.log("2. Apply toner");
    console.log("3. Mosturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// Functions are like RECIPES:
// - PARAMETERS are like ingrediants 
//- RETURN values ar elike a completed meal 

// Example below is a recipe for creating a sandwich 
// Need some filling, bread, and sauce to do it!
function makeSandwich(filling, bread, sauce) {

    let sandwich = filling + " sandwich on " + bread + " with " + sauce;
    return sandwich; //OUTPUT!!!
}
// Use the general recipe with specific ingredients 
// Store the resulting sandwich in a variable 
let grilledCheese = makeSandwich("cheese", "toast", "butter");
console.log(grilledCheese);
let caprese = makeSandwich("tomato mozz", "ciabatta", "pesto");
console.log(caprese);

// IF STATEMENTS evaluate a condition 
// then execute a block of code if TRUE
let age = 18;
// "is your age equal to 16"
if (age == 16) {
    console.log("Happy sweet sixteen!");
}
else {
    console.log("You can't have a sweet sixteen party");
}

// To test MULTIPLE conditions, use ELSE-IF statemnts 
if (age == 18) {
    console.log("Congrats on your first time voting!");
}
else if (age > 18) {
    console.log("Go vote!");
}
else{
    console.log("You're too young to vote...");
}

// All expressions that include comparison operators get evaluated and return a boolean value: either true or false
console.log( 2 > 1 ); 

//A comparison result can be assigned to a variable, just like any value:
let result = 10 > 4; // assign the result of the comparison
console.log( result ); 

//To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by-letter
console.log( 'J' > 'A' ); 
console.log('Green'=='Blue');
console.log('Happy'=='Happy');