const getTheTitles = function(bookArray) {
  let titles = [];
  bookArray.forEach(
    (item) => {
      titles.push(
        item.title
      );
    }
  );
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
