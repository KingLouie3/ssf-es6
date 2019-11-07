//Complete the below function to output a string using template literals. The string should read: The second item in this array is _____.
//Make use of interpolation to include the 2nd item from the array input in place of ____. Ex.  The second item in the array is orange.

const stringWithArray = (array) => {
    const second_item = array[1];
    const result = `The second item in this array is ${second_item}.`;
    console.log(result);
    return result;
    // let str1
    // let str2 = `Orange`;
    // array = [`The second item in this array is ____, ${str2}`];
    // return array[1];
};










//Do not edit
module.exports = stringWithArray;