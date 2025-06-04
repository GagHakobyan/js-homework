function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("Hello"));       

function MytoUpperCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // Եթե փոքրատառ ա (ASCII 'a'–'z' → 97–122)
    if (code >= 97 && code <= 122) {
      code = code - 32; // Մեծատառ դառնալու համար
    }

    result += String.fromCharCode(code);
  }

  return result;
}

console.log(MytoUpperCase("hello")); 
