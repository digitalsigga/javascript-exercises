

const removeFromArray = function(array, ...args) {
    
    const newArr = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArr.push(item);
        }
    });
    console.log(newArr);
    return newArr;
};

let arrHe = ["hello", "hi", "you"];

removeFromArray(arrHe, "hi", "you");



// Do not edit below this line
module.exports = removeFromArray;

