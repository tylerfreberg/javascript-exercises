const palindromes = function (str) {
    let replacedStr = (str.replace(/\W/g, '')).toLowerCase();

    l = 0;
    r = replacedStr.length - 1;

    while(l < r) {
        if(replacedStr[l] != replacedStr[r]) {
            return false;
        }
        l += 1;
        r -= 1;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
