const removeFromArray = function(array, ...args) {
    
    const newArray = [];
    
    array.forEach(element => {
        // push all except if included in args
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });
    
    return newArray;


    // OPCION 2
    // return array.filter(element => (!args.includes(element)));
};

// Do not edit below this line
module.exports = removeFromArray;
