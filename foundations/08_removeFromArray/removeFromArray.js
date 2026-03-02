const removeFromArray = function(arr, ...intsForRemoval) {
    if (intsForRemoval.length > arr.length) {
        throw new Error("Amount of items for removal is longer than array length.");
    }

    filteredArr = []

    for(i = 0; i < arr.length; i++) {
        if (intsForRemoval.includes(arr[i]) == false) {
            filteredArr.push(arr[i]);
        }
    }

    return(filteredArr);
};

// Do not edit below this line
module.exports = removeFromArray;
