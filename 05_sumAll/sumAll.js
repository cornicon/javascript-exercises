const sumAll = function(CountFromNumber, CountToNumber) {
    let result = 0;
    for (let i = CountFromNumber; i <= CountToNumber; i++)
    {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
