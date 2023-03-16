const getTheTitles = function(arrayOfBooks) {
    titles = [];
    for(book of arrayOfBooks)
    {
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
