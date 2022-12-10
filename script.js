// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 var maxlen = prompt ("How many characters would you like your password to have?");
 var letters = confirm ("You need lowercase and uppercase letters");
 var numbersspecchar = confirm ("You also need numbers and special characters");
 var characters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*+");
 

 var newPassword = "";
 var size = characters.length;
 for (var i = 0; i < maxlen; i++ ){
  newPassword = newPassword + characters.charAt(Math.floor(Math.random() * size));

 }
 return newPassword;

}

  
  



// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 














  // 1. Prompt user with password criteria DONE
  //    a. password length between 8-128 DONE
  //    b. Lowercase, uppercase, numbers, special characters DONE
  // 2. Validate input 
  // 3. Generate password based on criteria
  // 4. Display password in the box
