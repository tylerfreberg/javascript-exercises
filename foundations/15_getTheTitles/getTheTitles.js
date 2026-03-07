const getTheTitles = function(arr) {
    return(arr.map((book) =>returnTitle(book)));
};

function returnTitle(book) {
    return book.title;
}

// Do not edit below this line
module.exports = getTheTitles;
