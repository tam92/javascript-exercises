const getTheTitles = function(books) {
    const titlesArray = [];

    books.forEach(book => { titlesArray.push(book.title);});

    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
