const removeFromArray = function(InputArray, NumberToRemove) {
    let result = [];
    for (let i = 0; i < InputArray.length; i++)
    {
        if(InputArray[i] !== NumberToRemove)
            result.push(InputArray[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
