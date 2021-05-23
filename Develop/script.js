// generates password string
function generatePassword(length, useUpper, useLower, useNum, useChar) {
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var specialChar = '!@#$%^&*';
  var charPool = "";
  var generate = (length, characterPool) => {
    var result = '';
    var charactersLength = characterPool.length;
    for ( var i = 0; i < length; i++ ) {
      result += (characterPool.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result;
  };
  if (useUpper){
    charPool += upperChar;
  }
  if (useLower){
    charPool += lowerChar;
  }
  if (useNum){
    charPool += numbers;
  }
  if (useChar){
    charPool += specialChar;
  };
  return generate(length, charPool);
};

// determines password length based on prompt input
function getPassLength () {
  var passLen = prompt('Choose a password length between 8 and 128 characters.');
    if (passLen === null) {
      alert("Goodbye.")
        return;
    }
    else if (parseInt(passLen) >= 128){
      alert('Selection is longer than 128 characters. We have set your password length to 128. ');
      return 128;
    }
    else if (parseInt(passLen) <= 8){
      alert('Selection is shorter than 8 characters. We have set your password length to 8.');
      return 8;
    }
    return passLen;
  }

// Write password to the #password input
function writePassword() {
  var passLen = getPassLength();
  if (!passLen) {
    return;
  }
  var useUpper = confirm('Would you like to add uppercase letters?');
  var useLower = confirm('Would you like to add lowercase letters?');
  var useNum = confirm('Would you like to add numbers?');
  var useChar = confirm('Would you like to add special characters?');
  if (!useUpper && !useLower && !useNum && !useChar){
    alert('Invalid selection: No parameters chosen. Please try again.');
    return;
  }
  var password = generatePassword(passLen, useUpper, useLower, useNum, useChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

