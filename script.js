// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  while (true) {
    var passwordLength = getPasswordLength();
    if (!passwordLength === false){
      break;
    }
  }
  
  console.log(passwordLength);
  var lowerCase = confirm("Password to contain Lower Case Characters");
  var upperCase = confirm("Password to contain Upper Case Characters");
  var numeric = confirm("Password to contain Numeric Characters");
  var special = confirm("Password to contain Special Characters");
  var holder = [
      {name: "PasswordLength", value: passwordLength},
      {name: "LowerCase", value: lowerCase},
      {name: "Uppercase", value: upperCase},
      {name: "Numeric", value: numeric},
      {name: "SpecialCharacters", value: special}]
      console.log(holder);
  return holder; 

}

function getPasswordLength(){

  var pwordLength = parseInt(prompt("Enter length of password: between 8 and 128 characters"));
  
      if (pwordLength < 8 || pwordLength > 128 || isNaN(pwordLength) ){
        return false;
      } else {
        console.log(pwordLength);
        return pwordLength;
      }

}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length)) ];
}

// Function to generate password with user input
function passwordRequirements() { 
  var requirements = getPasswordOptions();
  var valid = false;
  requirements.forEach(element => {
    
    if (element.value)
      valid = true;
    });

    if (!valid){
    //password requirements not met
    alert("One character type should be chosen please try again");
  } else {
    //password requirements met proceed to generate password
    generatePassword(requirements);
  } 
}

  function isTrue(requirements){

    // filter true!!
    return (requirements.filter(function(element){
      return element.value === true
    }))
  }

  function generatePassword(requirements){

    var option = isTrue(requirements);
    // get only true choice for password requirements
    var password = "";
    
    for (let index = 0; index < requirements[0].value; index++) {

    //loop for the length of the required password
    //randomly select from each array of characters

      var choice = (getRandom(option));

      if (choice.name === "LowerCase") {
        password += getRandom(lowerCasedCharacters);
      }

      if (choice.name === "Uppercase") {
        password += getRandom(upperCasedCharacters);
      }

      if (choice.name === "Numeric") {
        password += getRandom(numericCharacters);
      }

      if (choice.name === "SpecialCharacters") {
        password += getRandom(specialCharacters);
      }
    }
    writePassword(password);
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(pWord) {
  var password = pWord;
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', passwordRequirements);