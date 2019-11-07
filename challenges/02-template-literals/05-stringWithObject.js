//Complete the below function. It will be given 3 inputs, an array of objects, an index and a key. The function should output a 
//string that reads: The information you requested is ____.  Have a nice day!
//Make use of interpolation to include the property from the object at the requested array index in place of the ____.

const stringWithObject = (array, index, key) => {
    console.log('array : ', array);
    console.log('index: ', index);
    console.log('key: ', key);
    const movie = array[index][key];
    //const movie = array[1]['title']
    const result = `The information you requested is ${movie}.  Have a nice day!`;
    return result;
};










//Do not edit
module.exports = stringWithObject;
