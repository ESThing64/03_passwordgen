let pwdLength = 0;
let useUppercase = false;
let useLowercase = false;
let useNumbers = false;
let useSpecChar = false;
let pwdLengthNumber = 0;
let password = "";
//lowercase, uppercase, numeric, and/or special characters
//https://codewithmark.com/easily-generate-random-alphanumeric-string-in-javascript#:~:text=If%20you%20are%20looking%20to%20generate%20random%20alphanumeric,accept%20a%20parameter%20range%20from%202%20to%2036.
//I want the code for 97-122 a-z, There are 26 letters so i just add 97
//https://www.w3schools.com/html/html_charset.asp for referace of chars
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Uppercase is from 65-90
function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// there are not 26 letters. There are a total of 10 digits. 0 starts at 48 so we add 48
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//there are some special charaters from 33-47 there are 15, so multiply by 15 and add 33 because they start at 33 
function getSpecChar() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



//////////////////
// Assignment Code
///////////////////
// Change the HTML -- DOM
var generateBtn = document.querySelector("#generate");
var resultId = document.querySelector("#password");

// const genOutPut = document.getElementById("password")
// const useUppercase = document.getElementById("useUppercase")
// const useLowercase = document.getElementById("useLowercase")
// const useNumbers = document.getElementById("useNumbers")
// const useSpecChar = document.getElementById("useSpecChar")
//                    do i still need this?
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
//  event listener --- calls function startgen()
generateBtn.addEventListener("click", startGen);
//when i click the button, i need a window prompt method
//ask for input on these things
//password length 8-128 characters
//include uppdercase/lowercase/numeric and/or special chars
//when button is press start stuff the pop up for the user to full in proprites for the password.
function startGen() {
  const pwdLength = prompt("Enter the lengeth of your password (Between 8 - 128 Characters")
  let useUppercase = confirm("Would you like to use uppercase?");
  let useLowercase = confirm("Would you like to use lowercase?");
  let useNumbers = confirm("Would you like to use numbers?");
  let useSpecChar = confirm("Would you like to use special characters?");
  // change sting to number
  const pwdLengthNumber = +pwdLength

  while (password.length < pwdLengthNumber) {
    let passwordArray = []
    if (useLowercase == true) {
      // getLowerCase();
      passwordArray = passwordArray.concat(getLowerCase())
      console.log("BANANA")
      
    }
    if (useUppercase == true) {
      passwordArray = passwordArray.concat(getUpperCase())
      
    }
    if (useNumbers == true) {
      passwordArray = passwordArray.concat(getNumber())
      
    }
    if (useSpecChar == true) {
      passwordArray = passwordArray.concat(getSpecChar())
      
    }
    function randomInt(max){
      return Math.floor(Math.random() * max);
    }
    password = password + passwordArray[randomInt(passwordArray.length)]
    
  }


  
  resultId.innerHTML = password
}
// pwdLengthNumber, useUppercase, useNumbers, useLowercase, useSpecChar
//gen password function
//starts the password variable, and loop through the startGen function to
// get each type of charcter and return it to the #password
// function genPassword() {
  //adde curly brackets to make things into an object. I NEED TO ADD TO THIS
  // let charArray = [{ pwdLengthNumber }, { useUppercase }, { useNumbers }, { useLowercase }, {useSpecChar}]
  // .filter(
  //   option => Object.values(option)[0]
  // )
  // console.log("in the genpassword function", charArray)
  // if (charArray[1] === undefined) {
  //   return "You gotta put in something man."
  // }
  // if (pwdLengthNumber < 8) {
  //   return "Man... It has to be 8 characters or more..."
  // }
  // if (pwdLengthNumber > 128) {
  //   return "Wayyyyy too much man"
  // }

  // console.log(charArray)

  

