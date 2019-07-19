const { makePairs } = require('./utils');

/**
 * 
 * @param {Array<int>} values Array of integer values
 * @return {int} Returns the maximum sum of pairs or single elements from values
 * 
 */
const getMaxSum = (values) => {
    if (!Array.isArray(values)) throw Error('Values should be an Array');
    if (values.length === 0) throw Error('Values must have at least one item');

    const lowers = values.filter(value => value <= 0).sort((v1, v2) => v1 === v2 ? 0 : v1 > v2 ? 1 : -1);
    const ones = values.filter(value => value === 1);
    const highers = values.filter(value => value > 1).sort((v1, v2) => v1 === v2 ? 0 : v1 < v2 ? 1 : -1);
    const lowerPairs = makePairs(lowers);
    const higherPairs = makePairs(highers);

    const pairSum = [...lowerPairs, ...higherPairs]
        .reduce((sum, pair) => Array.isArray(pair)
            ?
            sum + pair[0] * pair[1]
            :
            sum + pair
            , 0);

    return pairSum + ones.length;
}

module.exports = getMaxSum;