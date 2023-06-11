const palindromes = function (palindrome) {

    let test = palindrome.toLowerCase();
    test = test.replace(/[^a-z]+/g, "");

    // reverse the simple string
    let reverse = test.split("").reverse().join("");

    // return the comparison
    return (test === reverse);
};

// Do not edit below this line
module.exports = palindromes;
