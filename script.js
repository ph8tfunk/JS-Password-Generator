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
  var passwordLength = getPasswordLength();
  var lowerCase = confirm("Password to contain Lowerase characters");
  var upperCase = confirm("Password to contain Lowerase characters");
  var numeric = confirm("Password to contain numeric charaters");
  var specialCharacters = confirm("Password to contain special characters");
  var holder = [
      {name: "PasswordLength", value: passwordLength},
      {name: "LowerCase", value: lowerCase},
      {name: "Uppercase", value: upperCase},
      {name: "Numeric", value: numeric},
      {name: "SpecialCharacters", value: specialCharacters}]
  return holder; 

}

function getPasswordLength(){
  var pwordLength = parseInt(prompt("Enter length of password: between 8 and 128 characters"));
  if (pwordLength < 8 || pwordLength > 128) {
    getPasswordLength();
  } else {
    return pwordLength;
  }

}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(math.random() * arr.length())) ];
}

// Function to generate password with user input
function passwordRequirements() { 
  var requirements = getPasswordOptions();
  console.log(requirements);
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
    isTrue(requirements);
    //generatePassword();
  } 
}

  function isTrue(requirements){

    // filter true!!
    console.log(requirements.filter(function(element){
      return element.value === true
    }))
  }

  function generatePassword(){
    //loop for the length of the required password
    //randomly select from each array of characters

    for (let index = 0; index < pword.length; index++) {
      // do something
      
    }

  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
passwordRequirements();