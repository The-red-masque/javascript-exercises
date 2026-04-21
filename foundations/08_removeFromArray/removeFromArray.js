
// Alternative Version less effecient version.
// function removeFromArray (array, ...args) {
  // const newArray = [];
  // For each != args push to new array
  // array.forEach((item) => {
    // if (!args.includes(item)) {
      // newArray.push(item);
    // }
// });
    // return newArray;
// };
// Look up ""...args" in functions.
// Look up "!args"


const removeFromArray = function(array, ...args) {
  return array.filter(val => !args.includes(val))
}
// Do not edit below this line
module.exports = removeFromArray;
