const palindromes = function (value) {
  /* Variable that stores value w/o spaces */
  str = value.replace(/\S+/g, "");

  /* reversed new str */
  reversedStr = [str].reverse().join("");
  console.log(`The starting string is ${str} and the reversed string is ${reversedStr}.`);
  if (reversedStr === str) {return true;} 
  else {return false;}   // Expected behavior: Any non-palindrome returns false.
//                          // Actual behavior: Identifies non-palindromes as true.  
};
// // Do not edit below this line
module.exports = palindromes;
