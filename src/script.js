// Reverse a string

let newString = "";
let resultado = reverseAString("Hello Gama Academy");

function reverseAString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  console.log(newString);
}
