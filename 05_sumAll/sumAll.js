const sumAll = function(CountFromNumber, CountToNumber) {
    if(CountFromNumber < 0 || CountToNumber < 0
        || typeof(CountFromNumber) != typeof(1) || typeof(CountToNumber) != typeof(1))
            return 'ERROR';
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
