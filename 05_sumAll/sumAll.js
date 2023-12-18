const sumAll = function(numStart, numEnd) {
    if (numStart < 0 || numEnd < 0|| typeof numEnd !== "number" ||typeof numStart !== "number" ){
        return "ERROR"; 
    } else if (numStart < numEnd){
        let sum = 0;
        for (let i = numStart; i <= numEnd; i++) {
            sum =+ sum + i;
        }
        return sum;
    } else if (numEnd < numStart){
        let sum = 0;
        for (let i = numEnd; i <= numStart; i++) {
            sum =+ sum + i;
        }
        return sum;
    }
};


// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```

// Do not edit below this line

module.exports = sumAll;
