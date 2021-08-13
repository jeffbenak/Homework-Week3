// Assignment Code
var passwordLength;


// Displaying all character and number possibilities

var Specialcharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable for which specification they choose

var allCharacters = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {

// Ask the user how long they want the password to be
  passwordLength = prompt("How many characters long would you like your password to be? (Minimum 8, Maximum 128)");
  alert (passwordLength);

// Quits the prompt if a number isn't entered
  if (!passwordLength) {
  alert("Please enter a number to proceed");
  return;
  }

// Quits the prompt if a number from 8-128 isn't entered
  else if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please choose a number between 8 and 128");  
    return;
  }

  //Ask the user which criterias they would like to apply to their generated password
  var confirmSpecialcharacters = confirm("Would you like your password to contain special characters?");
  var confirmNumbers = confirm("Would you like your password to contain numbers?");
  var confirmuppercase = confirm("Would you like your password to contain uppercase letters?");
  var confirmlowercase = confirm("Would you like your password to contain lowercase letters?");

// Alert the user if no option is chosen
  if (!confirmSpecialcharacters && !confirmNumbers && !confirmuppercase && !confirmlowercase) {
    alert("You need to choose at least one option");
    return;
    
  }

  // Use concat to merge the two strings

  if (confirmSpecialcharacters === true) {
   // User wants special characters
    allCharacters = allCharacters.concat(Specialcharacters);
  }
  
  if (confirmNumbers === true) {
    // User wants Numbers
     allCharacters = allCharacters.concat(Numbers);
   }

   if (confirmuppercase === true) {
    // User wants Uppercase
     allCharacters = allCharacters.concat(upperCase);
   }
   
   if (confirmlowercase === true) {
    // User wants Lowercase
     allCharacters = allCharacters.concat(lowerCase);
   }
  
// Declare a variable for an empty string to be filled with the users password criteria
 var randompw = "";

 // Run a for loop to generate a password determined by the selected criteria
for (let i = 0; i < passwordLength; i++) {
  randompw = randompw + allCharacters[Math.floor(Math.random() * allCharacters.length)]; 

}

// Display the generated password in the text box 
return randompw;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

