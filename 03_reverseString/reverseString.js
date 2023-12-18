const reverseString = function(string) {
    let part = "";
    for (let i = string.length-1; i >= 0 ;i--) {
        part += string.slice(i, i+1);
    }
    return part;
};


// Do not edit below this line
module.exports = reverseString;
