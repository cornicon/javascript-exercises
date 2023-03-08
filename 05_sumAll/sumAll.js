const sumAll = function(CountFromNumber, CountToNumber) {
    let result = 0;
    if(CountFromNumber <= CountToNumber)
    {
        for (let i = CountFromNumber; i <= CountToNumber; i++)
        {
            result += i;
        }
    }
    else
    {
        for (let i = CountToNumber; i <= CountFromNumber; i++)
        {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
