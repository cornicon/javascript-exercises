const findTheOldest = function(arrayPeople) {
    const oldest = arrayPeople.sort( function(a, b) {
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        
        return ageA > ageB ? -1 : 1;
    })

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
