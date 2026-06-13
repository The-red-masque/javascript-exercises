const palindromes = function (value) {

  /* Variable that stores value w/o spaces */
  const defaultValue = value;
  
  const modifiedStr = value
    .toLowerCase()
    // replaces whitespace and exclamation marks.
    .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

  /* reversed new str */
  const reversedStr = modifiedStr
    .split("")
    .reverse()
    .join("");
  console.log(`The starting string is "${defaultValue}".\nThe modified string is "${modifiedStr}".\nThe reversed string is "${reversedStr}".`);
  if (reversedStr === modifiedStr) {return true;} 
  else {return false;}
};


// // Do not edit below this line
module.exports = palindromes;
