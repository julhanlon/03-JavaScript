// prompts for password length and confirms for types of characters to include
var length = prompt("Enter character length for password, number from 8-128");
if (length < 8 || length > 128) {
  alert("Password is not long enough!");
  var length = prompt("Enter character length for password, number from 8-128");
}
var lower = confirm("Include lowercase letters??");
var upper = confirm("Include upper case letters?");
var numbers = confirm("Include numbers?");
var symbols = confirm("Include symbols");

//checks to see if the prompts are working
console.log(length);
console.log(lower);
console.log(upper);
console.log(numbers);
console.log(symbols);

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //evaluates the different character types and runs them if they were confirmed true
  var charSet = "";
  if (lower) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upper) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    charSet += "0123456789";
  }
  if (symbols) {
    charSet += " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  //return value
  var returnVal = "";
  // takes the password length and runs it through a for loop
  for (var i = 0, n = charSet.length; i < length; i++) {
    //picks a character within charSet at index of random number
    returnVal += charSet.charAt(Math.floor(Math.random() * n));
  }
  console.log(returnVal);
  return returnVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
