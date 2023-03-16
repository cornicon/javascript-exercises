const findTheOldest = function(arrayPeople) {
    const oldest = arrayPeople.sort( function(a, b) {
        let ageA, ageB;
        if('yearOfDeath' in a)
            ageA = a.yearOfDeath - a.yearOfBirth;
        else
            ageA = new Date().getFullYear() - a.yearOfBirth;
        if('yearOfDeath' in b)
            ageB = b.yearOfDeath - b.yearOfBirth;
        else 
            ageB = new Date().getFullYear() - b.yearOfBirth;
        
        return ageA > ageB ? -1 : 1;
    })

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
