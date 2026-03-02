const reverseString = function(str) {
    len = str.length;
    let reversed = "";
    for(i = len - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return(reversed);
};

// Do not edit below this line
module.exports = reverseString;
