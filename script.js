// Assignment code here
//create arrays to draw characters from
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var includedChar = [];

var requiredChar = [];

var passwordArr = [];

const generatePassword = () => {

  const randomNumGenerator = (max) => {
    return Math.floor(Math.random() * max)
  };

  const passwordLength = window.prompt("How long would you like you're password to be? You're password can be at least 8 characters but no more than 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      window.alert("You're password must be 8 characters or greater! Please enter a valid length.");
      return null;
    } else {
      window.alert("You're password must be 128 characters or less! Please enter a valid length.");
      return null;
    }
  }

  if (!passwordLength) {
    window.alert("Please enter a valid length");
    return null;
  }

  if (isNaN(passwordLength)) {
    window.alert(passwordLength + " is not a number. Please enter a valid length");
    return null;
  }

  const confirmLowercase = window.confirm('Would you like to include lowercase letters in your password?');

  if (confirmLowercase) {
    const lowerChar = alphaChar.map(x => x.toLowerCase());
    includedChar = includedChar.concat(lowerChar);
    requiredChar.push(lowerChar[randomNumGenerator(lowerChar.length)]);
  }

  const confirmUppercase = window.confirm('Would you like to include uppercase letters in your password?');

  if (confirmUppercase) {
    includedChar = includedChar.concat(alphaChar);
    requiredChar.push(alphaChar[randomNumGenerator(alphaChar.length)]);
  }

  const confirmNumbers = window.confirm("Would you like to include numbers in your password?");

  if (confirmNumbers) {
    includedChar = includedChar.concat(numChar);
    requiredChar.push(numChar[randomNumGenerator(numChar.length)]);
  }

  const confirmSpecial = window.confirm("Would you like to include special characters in your password?");

  if (confirmSpecial) {
    includedChar = includedChar.concat(specialChar);
    requiredChar.push(specialChar[randomNumGenerator(specialChar.length)]);
  }

  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecial
  ) {
    window.alert('You must include some characters!');
    generatePassword();
  }

  console.log('includedChar.length: ', includedChar.length);
  console.log('randomNumGenerator: ', randomNumGenerator);
  console.log('includedChar[randomNumGenerator(includedChar.length)]: ', includedChar[randomNumGenerator(includedChar.length)]);

  for (let i = 0; i < requiredChar.length; i++) {
    passwordArr.push(requiredChar[i]);
  }

  let remainingLength = passwordLength - requiredChar.length;

  for (let i = 0; i < remainingLength; i++) {
    passwordArr.push(includedChar[randomNumGenerator(includedChar.length)])
  }

  var password = passwordArr.join('');

  console.log('confirmLowercase: ', confirmLowercase);
  console.log('confirmUppercase: ', confirmUppercase);
  console.log('confirmNumbers: ', confirmNumbers);
  console.log('confirmSpecial: ', confirmSpecial);
  console.log('includedChar: ', includedChar);
  console.log('requiredChar: ', requiredChar);
  console.log('passwordArr: ', passwordArr);
  console.log('password: ', password);

  includedChar = [];
  requiredChar = [];
  passwordArr = [];

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
