const leapYears = function(year) {
    // Leap years are years divisible by four (like 1984 and 2004).

    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 !== 0)) {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
