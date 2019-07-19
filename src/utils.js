/**
 * 
 * @param {Array<any>} values Array of values
 * @return {Array<Array<any>>} Returns an Array of pairs(arrays of 2 or 1 value)
 * 
 */
const makePairs = (values) => {
    if (!Array.isArray(values)) throw Error('Values should be an Array');

    return values.reduce(function (result, _, index, array) {
        if (index % 2 === 0) {
            if(index === array.length - 1){
                result.push(array[index]);
            } else{
                result.push(array.slice(index, index + 2));
            }
        }
        return result;
    }, []);
}

module.exports = {
    makePairs,
};