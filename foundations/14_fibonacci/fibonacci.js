const fibonacci = function(num) {
    let a = 0
    let b = 1;

    if (num == 0) {
        return 0;
    }
    if (num < 0) {
        return("OOPS");
    }
    for(i = 0; i < num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return(a);
};

// Do not edit below this line
module.exports = fibonacci;
