const palindromes = function (inputString) {
    // remove all spaces and special characters
    let sanitizedInput = inputString.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const length = sanitizedInput.length;
    for(let i = 0; i < length / 2; i++)
    {
        if(sanitizedInput.charAt(i) != sanitizedInput.charAt(length - 1 - i))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
