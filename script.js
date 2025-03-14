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
