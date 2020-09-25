//Deconstruction//
    
    //Now it needs to generate a random sequence of > 8 <= 128 random lower/uppercase letters, numbers and/or special characters to display to the user.
     //Now it needs to generate either a random sequence of lower/uppercase letters +  numbers + special characters OR it geneates the three parameters (letter number or special character) in a random order.
      //Need some sort of randomizer to talk with some sort of array that compesates for the aformentioned scenarios ^^) 
       //Randomizer needs to randomize lenth of each password too ||| array needs to hold digits 0-9, leters a-z & 33 special characters..
       //HOW do we make the computer know through JS that it is dealing with this particular task, interaction and password components
        //I dont think we are using for loops since they don't end but we do when password is >=8 <=128 randomized characters
         //Button must work and be communicating with JS
          //I don't think there are any if//else statemnets 
          //
         
         // Page could look nicer (HTML//CSS)




// Assignment Code
var generateBtn = document.querySelector("#generate");
// Need a variable for the user's selection

var passwordlength = textLength = ">=8, <=128"

var passwordParts1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordParts2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordParts3 = [" ", "!", "double quotes", " # ", " $ ", " % ", " & ", " ' ", " ( ", " ) ", " * ", " + ", " , ", "-", " . ", " / ", " : ", " ; ", " < ", " = ", " > ", " ? ", " @ ", "[ ", " ] ", " ^ ", " _ ", " ` ", " { ", " } ", " | ", " ~ "];
 
//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordLength = promopt ("please enter a password between 8 & 128 upper/lower case letters, numbers ")


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click") prompt ("please enter a password between 8 & 128 upper/lower case letters, numbers");
passwordLength = promopt ("please enter a password between 8 & 128 upper/lower case letters, numbers ");


  

