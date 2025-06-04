//Write a function that takes a string as an argument and returns the number of characters in the string.

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("Hello"));       


//Create a function that converts a given string to uppercase.

function MytoUpperCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      code = code - 32; 
    }

    result += String.fromCharCode(code);
  }

  return result;
}

console.log(MytoUpperCase("hello")); 
