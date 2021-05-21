// try and only reference local scope variables in JS
// Assignment Code

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
  // verifies what password parameters should be used
  if (useUpper){
    charPool += upperChar;
  }
  else if (useLower){
    charPool += lowerChar;
  }
  else if (useNum){
    charPool += numbers;
  }
  else if (useChar){
    charPool += specialChar;
  };
  return generate(length, charPool);
}

// determines password length based on prompt input
function getPassLength () {
  var passLen = prompt('Choose a Password Length Between 8 and 128');
    if (passLen === null) {
        return;
    }
    else if (passLen >= 128){
      alert('Selection is Longer than 128 characters');
      return;
    }
    else if (passLen <= 8){
      alert('Selection is Shorter than 8 Characters ');
      return;
    }
    return passLen;
  }

// multiple 'get' functions to get the case and characters -- write below in the writePassword function

// Write password to the #password input
function writePassword() {
  var passLen = getPassLength ();
  var password = generatePassword(passLen);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
