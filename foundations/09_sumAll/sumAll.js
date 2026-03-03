const sumAll = function(x, y) {
    let start;
    let end;
    let sum = 0;

    if (Number.isInteger(x) == false || Number.isInteger(y) == false ||
        x < 0 || y < 0) {
        return("ERROR");
    }

    if (x > y) {
        start = y;
        end = x;
    }
    else {
        start = x;
        end = y;
    }

    for(i = start; i <= end; i++) {
        sum += i;
    }

    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
