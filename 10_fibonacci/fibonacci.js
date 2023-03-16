const fibonacci = function(input) {
    let fibonacciNumberIndex = Number(input);
    let fibArray = [1, 1];
    for(let i = 0; i <= fibonacciNumberIndex - 2; i++)
    {
        fibArray.push(fibArray[i] + fibArray[i+1]);
    }
    return fibArray[fibonacciNumberIndex-1];
};

// Do not edit below this line
module.exports = fibonacci;
