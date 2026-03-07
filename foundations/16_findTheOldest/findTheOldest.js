const findTheOldest = function(arr) {


    let sorted = arr.sort((a, b) => calculateAge(a) < calculateAge(b) ? 1 : -1);
    return sorted[0];
};

function calculateAge(obj) {
    let deathYear;
    if(obj.yearOfDeath === undefined) {
        deathYear = new Date().getFullYear();
    }
    else {
        deathYear = obj.yearOfDeath;
    }

    return(deathYear - obj.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
