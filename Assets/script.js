// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specCharacters ="!@#$%^&*()";




// function for Generate Password password to get prompts
function generatePassword() {
  var passwordLengthSelect = prompt ("How many characters would you like your password to have? It must be from 8 to 128 characters.");
    if (passwordLengthSelect >= 8 && passwordLengthSelect <= 128){
      upperCasePrompt();
    }
    else if (passwordLengthSelect < 8) {
      alert("Your password is too small. Please choose a number between 8 and 128.")
      generatePassword();
    } else if (passwordLengthSelect > 128){
      alert("Your password is too long. Please choose a number between 8 and 128.")
      generatePassword();
    } else if (isNaN(passwordLengthSelect)) {
      alert("Whoops! Did you forget your numbers? Please choose a number between 8 and 128.")
      generatePassword();
    } else {
      return generatePassword;
      
    };
};


//Upper case letter yes or no
function upperCasePrompt(){
  var upperCaseQuestion = confirm("Would you like to include uppercase letters in your secure password?");
  if (upperCaseQuestion === true){
    lowerCasePrompt(); 
  } else if (upperCaseQuestion !== true){
    generatePassword();
  }
};



//Lower case letter yes or no
function lowerCasePrompt(){
  var lowerCaseQuestion = confirm("Would you like to include lowerecase letters in your secure password?");
  if (lowerCaseQuestion === true){
    numbersQuestion();
  };

};


//Number case yes or no
function numbersQuestion(){
  var numberCaseQuestion = confirm("Would you like to include numbers in your secure password?");
  if (numberCaseQuestion === true){
    symbolCaseQuestion();
  }
}




generatePassword();
  





/*  var letters1 = confirm ("Would you like to have uppercase letters?");
 var letters2 = confirm ("Would you like to have lowercase letter?");
 var numbers = confirm ("Would you like to have numbers?");
 var specCharacters = confirm ("Would you like to have special characterds?");
 var characters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*+"); */ 
 

/*  var newPassword = "";
 var size = characters.length;
 for (var i = 0; i < maxlen; i++ ){
  newPassword = newPassword + characters.charAt(Math.floor(Math.random() * size));

 } */
 //return newPassword;



  
  



// Write password to the #password input
 function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
 














  // 1. Prompt user with password criteria DONE
  //    a. password length between 8-128 DONE
  //    b. Lowercase, uppercase, numbers, special characters DONE
  // 2. Validate input 
  // 3. Generate password based on criteria
  // 4. Display password in the box
