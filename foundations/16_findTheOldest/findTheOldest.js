const findTheOldest = function(people) {
  
  /*
  Sort through Array to find the oldest person
  - Add age to object?
  - sort array by age
  - If there is no death, create a yearOfDeath based on current year.
  */
  
  //const hasDied = item.includes("yearOfDeath");
  //const thisYear = new Date().getFullYear();
    function sortByAge(arr) {
    arr.sort((a, b) => b.age - a.age);
    }
  people.forEach((item) => {
    item.age = item.yearOfDeath - item.yearOfBirth;
  });

  sortByAge(people);
  let oldestPersonObject = people.at(0);
  console.log(oldestPersonObject);
  //let oldestPersonName = oldestPersonObject.name; 
  //console.log(oldestPersonName);
  return oldestPersonObject;
  

};

// Do not edit below this line
module.exports = findTheOldest;
