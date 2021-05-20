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
  // if statements for using upper/lower/etc
  // charPool += upperChar --> if selected Yes
  // run rand at the end using charPool at the end
  return generate(length, charPool);

}

// maybe separate input and validation into separate functions
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

// multiple 'get' functions to get the case and characters -- write below



// Write password to the #password input
function writePassword() {
  var passLen = getPassLength ();

  var password = generatePassword(passLen);
  var 


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

writePassword();